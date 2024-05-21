import React from 'react'

const Logindemo = () => {
  return (
<div className="card-body px-5 py-5">
  <h3 className="card-title text-left mb-3">Login</h3>
  <form>
    <div className="form-group">
      <label>Username or email *</label>
      <input type="text" className="form-control p_input" />
    </div>
    <div className="form-group">
      <label>Password *</label>
      <input type="text" className="form-control p_input" />
    </div>
    <div className="form-group d-flex align-items-center justify-content-between">
      <div className="form-check">
        <label className="form-check-label">
          <input type="checkbox" className="form-check-input" /> Remember me <i className="input-helper" /></label>
      </div>
      <a href="#" className="forgot-pass">Forgot password</a>
    </div>
    <div className="text-center">
      <button type="submit" className="btn btn-primary btn-block enter-btn">Login</button>
    </div>
    <div className="d-flex">
      <button className="btn btn-facebook me-2 col">
        <i className="mdi mdi-facebook" /> Facebook </button>
      <button className="btn btn-google col">
        <i className="mdi mdi-google-plus" /> Google plus </button>
    </div>
    <p className="sign-up">Don't have an Account?<a href="#"> Sign Up</a></p>
  </form>
</div>

  )
}

export default Logindemo