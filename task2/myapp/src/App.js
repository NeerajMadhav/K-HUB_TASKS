// Task to create a form using the react which takes the input from the user 
import React from "react";
import "./styles.css";
function CollegeRegistration() {
    return (
        <div>
            <center>
            <h1>College Registration Form</h1>
            <form>
                <label>
                    Name:
                        <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Email:
                        <input type="email" name="email" />
                </label>
                <br />
                <label>
                    Phone:   
                        <input type="tel" name="phone" required/>
                </label>
                <br />
                <label>
                    College:
                        <input type="text" name="college" />
                </label>
                <br />
                <label>
                    GPA:
                        <input type="number" name="gpa" />
                </label>
                <br />
            </form>
        <input type="submit" value="Submit" />
        </center>
    </div>
    
    );
}
export default CollegeRegistration;