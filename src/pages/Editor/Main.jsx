import React from "react";
import cookingImg from "../../assets/images/cooking.jpg";

import "./Main.css";
import Footer from "../../components/ui/Footer";
import ImageComponent from "../../components/ui/ImageComponent";

const Main = () => {
  return (
    <>
      <div className="app__editor-main">
        <section className="upper-section">
          <div className="upper">
            <div className="texts">
              <div>
                <h4>Hello Name,</h4>
                <h4>welcome to the editor's page!</h4>
              </div>
              <span>
                You can add, edit, and delete the recipes you have shared. Let's
                create and share amazing recipes together!
              </span>
            </div>
            <div className="imgContainer">
              <ImageComponent
                src={cookingImg}
                desc="Cooking"
                hash={"LILzjM58Xoa$#ix^o#M|*0?bx[t7"}
              />
            </div>
          </div>
        </section>
        <section className="btn-container">
          <div style={{ display: "flex", justifyContent: "start" }}>
            <button>Add Recipes</button>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button>Edit Recipes</button>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button>Your Recipes</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Main;
