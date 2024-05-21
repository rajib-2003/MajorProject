const servicesModel = require("../models/cardModels");
// const userModel = require('../models/userModel')

module.exports.getServices = async (req, res) => {
  const _data = await servicesModel.find({});
  if (_data) {
    return res.send({ code: 200, message: "success", data: _data });
  } else {
    return res.send({ code: 500, message: "Service error" });
  }
};

module.exports.addServices = async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.file.path;
    if (!title || !description || !imageUrl) {
      return res.send({ code: 400, message: "Bad Request" });
    }

    const newService = new servicesModel({
      title: title,
      description: description,
      imageUrl: imageUrl,
    });

    const success = await newService.save();

    if (success) {
      return res.send({ code: 200, message: "add success" });
    } else {
      return res.send({ code: 500, message: "Service error" });
    }
  } catch (err) {
    res.send({ code: 500, message: "Internal Server Err." });
  }
};

// module.exports.updateService = async (req, res) => {
//     try {
//       const serviceId = req.params.id;
//       console.log("Service ID:", serviceId); // Add this line for debugging
//       const { title, description } = req.body;
  
//       if (!title || !description) {
//         return res.status(400).send({
//           code: 400,
//           message: "Bad Request: Title or description missing",
//         });
//       }
  
//       const updatedService = await servicesModel.findByIdAndUpdate(
//         serviceId,
//         { title, description },
//         { new: true }
//       );
  
//       if (updatedService) {
//         return res.status(200).send({
//           code: 200,
//           message: "Service updated successfully",
//           data: updatedService,
//         });
//       } else {
//         return res.status(404).send({ code: 404, message: "Service not found" });
//       }
//     } catch (err) {
//       console.error(err);
//       return res.status(500).send({ code: 500, message: "Internal Server Error" });
//     }
//   };
  

  // editController.js



module.exports.editService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    console.log("Service ID:", serviceId); // Add this line for debugging
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).send({
        code: 400,
        message: "Bad Request: Title or description missing",
      });
    }

    const updatedService = await servicesModel.findByIdAndUpdate(
      serviceId,
      { title, description },
      { new: true }
    );

    if (updatedService) {
      return res.status(200).send({
        code: 200,
        message: "Service updated successfully",
        data: updatedService,
      });
    } else {
      return res.status(404).send({ code: 404, message: "Service not found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).send({ code: 500, message: "Internal Server Error" });
  }
};
module.exports.getServiceById = async (req, res) => {
  try {
    const serviceId = req.params.id;
    console.log("Service ID:", serviceId); // Add this line for debugging

    const service = await servicesModel.findById(serviceId);

    if (!service) {
      return res.status(404).send({ code: 404, message: "Service not found" });
    }

    return res.status(200).send({
      code: 200,
      message: "Service fetched successfully",
      data: service,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({ code: 500, message: "Internal Server Error" });
  }
};



module.exports.deleteService = async (req, res) => {
  try {
    const serviceId = req.params.id;

    const deletedService = await servicesModel.findByIdAndDelete(serviceId);

    if (deletedService) {
      return res
        .status(200)
        .send({ code: 200, message: "Service deleted successfully" });
    } else {
      return res.status(404).send({ code: 404, message: "Service not found" });
    }
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .send({ code: 500, message: "Internal Server Error" });
  }
};
