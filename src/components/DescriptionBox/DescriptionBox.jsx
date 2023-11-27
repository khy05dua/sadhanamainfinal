import React, { useState } from "react";
import "./DescriptionBox.css";
import Button from "../button/button";
import images from "../Assets/timetable";
import all_product from "../Assets/all_product";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import BmiCalculator from "../Assets/bmiclaculator";
import Product from "../../pages/Product";
import age from "../Assets/age.jpg";
import addiction from "../Assets/addiction.jpg";
import cog from "../Assets/COGNITIVE.jpg";
import med from "../Assets/meditatation.jpg";
import mental from "../Assets/mental wellness.jpg";
import sleep from "../Assets/improvesleep.jpg";
import anxiety from "../Assets/anxiety.jpg";
import stress from "../Assets/stress.jpg";
import innerhappiness from "../Assets/innerhappiness.jpg";
import energy from "../Assets/energybooster.jpg";
// const Product = () => {
//     const { all_product } = useContext(ShopContext);
//     const { productId } = useParams();
//     const product = all_product.find((e) => e.id === Number(productId));

//     return (
//       <div>
//         <Breadcrumb product={product} />
//         <ProductDisplay product={product} />
//         <DescriptionBox product={product} /> // Pass product prop to DescriptionBox
//         <RelatedProducts />
//       </div>
//     );
//   };

const DescriptionBox = ({ product }) => {
  const [activeSection, setActiveSection] = useState("Description");

  const handleSectionClick = (section) => {
    console.log(`Clicked on ${section} text`);
    setActiveSection(section);
  };

  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">
          <p onClick={() => handleSectionClick("Overview")}>Overview</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("Video")}>Video</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("Trackers")}>Trackers</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("TimeTable")}>TimeTable</p>
        </div>
        <div className="descriptionbox-nav-box fade">
          <p onClick={() => handleSectionClick("BMI Calculator")}>
            BMI Calculator
          </p>
        </div>
      </div>
      <div className="descriptionbox-description">
        {/* Render content based on activeSection */}
        {activeSection === "Overview" && (
          
            
            <div>
            {product.name === "Reduce Stress, Welcome Peace" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}

            {product.name === "Controls anxiety" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>

            )}

            {product.name === "Inner Happiness" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}
            {product.name === "Overall Mental Wellness" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}
            {product.name === "Emotional Health and Cognitive Focus" && (
             <p>
             <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
             
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
         </p>
            )}
            {product.name === "reduce age-related memory loss" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}
            {product.name === "Can generate kindness" && (
             <p>
             <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
             
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
         </p>
            )}
            {product.name === "May help fight addictions" && (
             <p>
             <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
             
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
         </p>
            )}
            {product.name === "Improves sleep" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}
            {product.name === "Energy Boost and Overall Wellness" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}
            {product.name === "Meditation and Relaxation" && (
             <p>
             <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
             
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
         </p>
            )}
            {product.name === "General Wellness" && (
              <p>
              <strong>
Stress relief holds immense significance in our lives, impacting our physical health, mental clarity, emotional well-being, and overall quality of life. Physically, chronic stress can lead to severe health issues like high blood pressure, heart disease, and weakened immunity. Engaging in stress-relieving practices, such as meditation and relaxation, helps mitigate these effects, promoting better health and resilience.
<br/>
<br/>
              
Welcome to our stress reduction plan, designed to help you find peace and tranquility in the midst of life's chaos. Our meditation website offers a holistic approach to calming the mind and relaxing the body, ensuring you navigate daily challenges with ease.
<br/>
<br/>
Remember, the journey to reducing stress is personal and unique to each individual. Our website is here to support and guide you as you embark on this transformative journey toward a more relaxed, balanced, and mindful life.

</strong>
          </p>
            )}











          </div>
        )}
        {activeSection === "Video" && (
          <div>
            <h2>Video Section</h2>
            {/* Render video content */}
          </div>
        )}
        {activeSection === "Trackers" && (
          <div>
            <h2>Trackers Section</h2>
            {/* Render trackers content */}
          </div>
        )}
        {activeSection === "TimeTable" && (
          <div>
            {product.name === "Reduce Stress, Welcome Peace" && (
              <img src={stress} alt={product.name} width="700" height="1000" />
            )}

            {product.name === "Controls anxiety" && (
              <img src={anxiety} alt={product.name} width="700" height="1000"  />
            )}

            {product.name === "Inner Happiness" && (
              <img src={innerhappiness} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "Overall Mental Wellness" && (
              <img src={mental} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "Emotional Health and Cognitive Focus" && (
              <img src={cog} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "reduce age-related memory loss" && (
              <img src={age} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Can generate kindness" && (
              <img src={age} alt={product.name} width="700" height="1000" />
            )}
            {product.name === "May help fight addictions" && (
              <img src={addiction} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Improves sleep" && (
              <img src={sleep} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Energy Boost and Overall Wellness" && (
              <img src={energy} alt={product.name} width="700" height="1000"  />
            )}
            {product.name === "Meditation and Relaxation" && (
              <img src={med} alt={product.name}  width="700" height="1000" />
            )}
            {product.name === "General Wellness" && (
              <img src={mental} alt={product.name} width="700" height="1000"  />
            )}




          </div>
        )}

        {activeSection === "BMI Calculator" && (
          <div>
            <BmiCalculator />
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
