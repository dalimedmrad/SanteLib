<div className="container right-panel-active">
  {/* Sign Up */}
  <div className="container__form container--signup">
    <form action="#" className="form" id="form1">
      <h2 className="form__title">Sign Up</h2>
      <input type="text" placeholder="User" className="input" />
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <button className="btn">Sign Up</button>
    </form>
  </div>
  {/* Sign In */}
  <div className="container__form container--signin">
    <form action="#" className="form" id="form2">
      <h2 className="form__title">Sign In</h2>
      <input type="email" placeholder="Email" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <a href="#" className="link">
        Forgot your password?
      </a>
      <button className="btn">Sign In</button>
    </form>
  </div>
  {/* Overlay */}
  <div className="container__overlay">
    <div className="overlay">
      <div className="overlay__panel overlay--left">
        <button className="btn" id="signIn">
          Sign In
        </button>
      </div>
      <div className="overlay__panel overlay--right">
        <button className="btn" id="signUp">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</div>

 // <div className='login-jpj'>
    //   <div className="login-wrap">
    //     <div className="login-html">
    //       <input
    //         id="tab-1"
    //         type="radio"
    //         name="tab"
    //         className="sign-in"
    //         defaultChecked
    //       />
    //       <label htmlFor="tab-1" className="tab">
    //         Sign In
    //       </label>
    //       <input id="tab-2" type="radio" name="tab" className="sign-up" />
    //       <label htmlFor="tab-2" className="tab">
    //         Sign Up
    //       </label>
    //       {/* Login Form */}
    //       <div className="login-form">
    //         <div className="sign-in-htm">
    //           <div className="group">
    //             <label htmlFor="user" className="label">
    //               Username
    //             </label>
    //             <input
    //               id="user"
    //               type="text"
    //               className="input"

    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>{" "}
    //           <div className="group">
    //             <label htmlFor="pass" className="label">
    //               Password
    //             </label>
    //             <input
    //               id="pass"
    //               type="password"
    //               className="input"

    //               data-type="password"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>
    //           <div className="group">
    //             <input
    //               id="check"
    //               type="checkbox"
    //               className="check"
    //               defaultChecked
    //             />
    //           </div>
    //           <div className="group">
    //             <input
    //               type="submit"
    //               className="button"
    //               defaultValue="Sign In"
    //               onClick={() =>
    //                 dispatch(loginUser({ email, password }, history))
    //               }
    //             />
    //           </div>
    //           <div className="hr" />
    //           <div className="foot-lnk">
    //             <a href="#forgot">Forgot Password?</a>
    //           </div>
    //         </div>
    //         {/* sign up part */}
    //         <div className="sign-up-htm">
    //           <div className="group">
    //             <label htmlFor="user" className="label">
    //               Name
    //             </label>
    //             <input
    //               id="user"
    //               type="text"

    //               className="input"
    //               onChange={(e) => setName(e.target.value)}
    //             />
    //           </div>
    //           <div className="group">
    //             <label htmlFor="lastName" className="label">
    //               lastName
    //             </label>
    //             <input
    //               id="user"
    //               type="text"
    //               className="input"
    //               onChange={(e) => setLastName(e.target.value)}
    //             />
    //           </div>

    //           <div className="group">
    //             <label htmlFor="pass" className="label">
    //               Email Address
    //             </label>
    //             <input
    //               id="pass"
    //               type="text"
    //               className="input"
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>

    //           <div className="group">
    //           <label htmlFor="pass" className="label">
    //               Ville
    //             </label>
    //             <select
    //               className="input"

    //               onChange={(e) => setVille(e.target.value)}
    //             >
    //               <option   value="">Ville</option>
    //               {villes.map((el) => (
    //                 <option className="option"  value={el}>{el}</option>
    //               ))}
    //             </select>
    //           </div>

    //           <div className="group">
    //           <label htmlFor="pass" className="label">
    //               Profession
    //             </label>
    //             <select
    //               className="input"

    //               onChange={(e) => setProfession(e.target.value)}
    //             >
    //               <option className="option" value="">profession</option>
    //               <option className="option" value="Client">Client</option>
    //               <option className="option" value="Doctor">Doctor</option>
    //             </select>
    //           </div>

    //           {profession === "Doctor" ? (<div className="group">
    //             <label htmlFor="pass" className="label">
    //               Specialité
    //             </label>
    //             <select
    //               className="input"

    //               onChange={(e) => setSpecialité(e.target.value)}
    //             >
    //               {specilaités.map((el) => (
    //                 <option   className="option" value={el}>{el}</option>
    //               ))}
    //             </select>
    //             </div>
    //           ) : null}
    //           <div className="group">
    //             <label htmlFor="pass" className="label">
    //               Password
    //             </label>
    //             <input
    //               id="pass"
    //               type="password"
    //               className="input"
    //               data-type="password"
    //               onChange={(e) => setPassword(e.target.value)}
    //             />
    //           </div>

    //           <div className="group">
    //             <input
    //               type="submit"
    //               className="button"
    //               defaultValue="Sign Up"
    //               onClick={() =>
    //                 dispatch(
    //                   registerUser(
    //                     {
    //                       name,
    //                       lastName,
    //                       email,
    //                       password,
    //                       profession,
    //                       specialité,
    //                       ville,
    //                     },
    //                     history
    //                   )
    //                 )
    //               }
    //             />
    //           </div>
    //           <div className="hr" />
    //           <div className="foot-lnk">
    //             <label htmlFor="tab-1">Already Member?</label>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </div>
