import React from 'react'
import { Link } from 'react-router-dom'

import './about.css'

function About() {
  return (

    <div className='about'>
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="navbar-logo">
            <Link to="/"><img  src='./Images/brand/logo.png' alt="" /></Link>
                <h5>Projectile</h5>
            </div>
            <div className="navbar-links">
                <div className="nabbar-link-item p-regular"><a href="#">Home</a>
                  <i className='bx bx-chevron-down'></i>
              </div>
                <div className="nabbar-link-item p-regular"><a href="#">Pricing</a>
                  <i className='bx bx-chevron-down'></i>
              </div>
                <div className="nabbar-link-item p-regular"><a href="#">About</a>
                  <i className='bx bx-chevron-down'></i>
              </div>
                <div className="nabbar-link-item p-regular"><a href="#">CMS Pages</a><i className='bx bx-chevron-down'></i>
              </div>
                <div className="nabbar-link-item p-regular"><a href="#">Other Pages</a>
                  <i className='bx bx-chevron-down'></i>
              </div>
            </div>
            <div className="navbar-btn">
                <div className="cart-btn">
                  <i className='bx bxs-cart p-regular' ></i>
                  <a href="#">Cart</a>
                </div>
                <div className="login-btn p-regular">
                  <a href="#">Login</a>
                </div>
                <div className="signup-btn">
                  <a href="#" className="btn-signup p-regular">Sign Up
                  </a>
                </div>
            </div>
          </div>
      </div>

      <div className="container hero-wrapper">
          <div className="row flex-sm-column hero-box-wrapper">
            <div className="col-lg-6 col-md-6 col-sm-12 hero-box-left-item">
                <h1 className="h1">Manage all your projects in one place</h1>
                <p className="p-big">View plans, track progress, increase productivity and improve communication with Projectile.</p>

                <a href="#" className="btn-primary">Get Started for Free</a>

                <div className="star-img">
                <img src="./Images/brand/Group 349.svg" alt=""/>
                </div>
                <div className="star-img-p">
                <p>Rated 4.9 on G2 & Capterra</p>
                <img src="./Images/brand/G2_image 9.png" alt=""/>
                <img src="./Images/brand/G1_image 8.png" alt=""/>
              </div>
                {/* <!-- <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i>
                <i className='bx bxs-star'></i> --> */}

            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 hero-box-right-item">
                <div className="hero-box-right-item-img-container1">
                  <div className="img-container1-img1">
                      <img src="./Images/brand/Group 11.png" alt=""/>
                  </div>
                  <div className="img-container1-img2">
                      <img src="./Images/brand/_Group 14.svg" alt=""/>
                  </div>
                </div>
                <div className="hero-box-right-item-img-container2">
                  <div className="img-container2-img-1">
                      <img src="./Images/brand/Group 9.svg" alt=""/>
                  </div>
                  <div className="img-container2-img-2">
                      <div className="img-container2-inner-img1">
                        <img src="./Images/brand/Group 15.svg" alt=""/>
                      </div>
                      <div className="img-container2-inner-img2">
                        <img src="./Images/brand/2_Group 7.svg" alt=""/>
                      </div>
                      <div className="img-container2-inner2">
                        <div className="img1-inner2">
                            <img src="./Images/brand/Group 21.png" alt=""/>
                        </div>
                        <div className="img2-inner2">
                          <img src="./Images/brand/Group 22.png" alt=""/>

                        </div>
                      </div>

                  </div>
                </div>
            </div>
          </div>
      </div>


      <div className="partner-section">
          <hr/>
          <div className="partner-box">
            <h1 className="partner-heding">Trusted by INDUSTRY leaders</h1>
            <div className="partner-logos">
            <div className="partner-logo">
                <img src="./Images/brand/Group 130.svg" alt=""/>
            </div>
            <div className="partner-logo">
                <img src="./Images/brand/Group 131.svg" alt=""/>
            </div>
            <div className="partner-logo">
                <img src="./Images/brand/Group 132.svg" alt=""/>
            </div>
            <div className="partner-logo">
                <img src="./Images/brand/Group 133.svg" alt=""/>
            </div>
            <div className="partner-logo">
                <img src="./Images/brand/Group 134.svg" alt=""/>
              </div>
            </div>
          </div>
          <hr/>
      </div>

    
      <div className="feature-section">
         <div className="feature-box">
            <div className="heading">
               <h2 className="h2">Get complete visibility and control</h2>
            </div>
            <div className="card-box">
               <div className="card-inner">
               <div className="feature1">
                  <div className="feature-icon">
                     <img src="./Images/brand/PenNibStraight.svg" alt=""/>

                  </div>
                  <h6 className="h6">Avoid Roadblocks</h6>
                  <p className="p-regular">Monitor progress against your plans and address deviations faster. Automatic alerts help you counter surprise obstacles and delays.</p>
                  <a className="third-btn" href="#">LEARN MORE
                  </a>
               </div>
               <div className="feature2">
                  <div className="feature-icon2">
                     <img src="./Images/brand/Layout.svg" alt=""/>

                  </div>
                  <h6 className="h6">Avoid Roadblocks</h6>
                  <p className="p-regular">Monitor progress against your plans and address deviations faster. Automatic alerts help you counter surprise obstacles and delays.</p>
                  <a className="third-btn" href="#">LEARN MORE
                  </a>


               </div>
               <div className="feature3">
                  <div className="feature-icon3">
                     <img src="./Images/brand/Intersect.svg" alt=""/>

                  </div>
                  <h6 className="h6">Avoid Roadblocks</h6>
                  <p className="p-regular">Monitor progress against your plans and address deviations faster. Automatic alerts help you counter surprise obstacles and delays.</p>
                  <a className="third-btn" href="#">LEARN MORE
                  </a>



               </div>
            </div>
            </div>
            <a href="#" className="btn-primary btn-primary-center ">Get Started</a>
           
         </div>  
      </div>
      

      {/* <!-- =========================2nd Feature Section=============== --> */}
      <div className="feature-section-2nd">
         <div className="feature-inner-box">
            <div className="box-1">
               <h6 className="h6">Customizable Dashboard</h6>
               <p className="p-regular">Choose from hundreds of templates and customize your dashboard for each project.</p>
               <div className="inner-box1-img-box">
                  <img src="./Images/brand/Group 7.svg" alt=""/>
               </div>
               <div className="inner-box1-img-box2">

                  <div className="img-1">
                  <img src="./Images/brand/_Group 22.png" alt=""/>
                     

                  </div>
                  <div className="img-2">
                  <img src="./Images/brand/Group 119.png" alt=""/>
               </div>


               </div>
            </div>
            <div className="box-2">
               <h6 className="h6">Real-time Analytics</h6>
               <p className="p-regular">Analyze your team’s performance, identify and solve bottlenecks faster.</p>
               <div className="inner-box1-img-box">
                  <img src="./Images/brand/Group 126.svg" alt=""/>
               </div>


            </div>
         </div>
      </div>

     {/* <!-- =============benifits section============== --> */}

     <div className="benifit-secstion">

      <div className="benifit-box">

         <div className="benifit-box-left">
            <img className="benifit-box-left-img" src="./Images/brand/Group 140.svg" alt=""/>
            <img src="./Images/brand/Group 141.svg" alt=""/>
            <img src="./Images/brand/_Group 142.svg" alt=""/>
            <div className="gradient"></div>
         </div>
         <div className="benifit-box-right">
            <h2 className="h2_">Streamlined workflow that saves hours</h2>
            <p className="p-medium">Spend less time on organizing and tracking, and more time on core functions for your projects.</p>
            <div className="List-container">
               <div className="List-Item1">
                  <img src="./Images/brand/CheckCircle.svg" alt=""/>
                  <p >Set up workflows only once</p>
               </div>
               <div className="List-Item1">
                  <img className="mt-16 mb-16" src="./Images/brand/CheckCircle.svg" alt=""/>
                  <p className="mt-16">Set up workflows only once</p>


               </div>
               <div className="List-Item1">
                  <img src="./Images/brand/CheckCircle.svg" alt=""/>
                  <p>Set up workflows only once</p>
               </div>
            </div>
         </div>

      </div>

     </div>

                  {/* <!-- =============benifits section2============== --> */}


     <div className="benifit-secstion_2">

      <div className="benifit2-box ptt-40">

         <div className="benifit2-box-left">
            <h2 className="h2_">Real-time collaboration, wherever you are</h2>
            <p className="p-medium">Designed for remote and hybrid organizations, Projectile is a shared workspace that makes collaborating with your team smooth and intuitive. Even remotely.</p>
            
      
         </div>
         <div className="benifit2-box-right">
            <img className="benifit-box-right-img pt-10" src="./Images/brand/Group 145.svg" alt=""/>
            <div className="benifit2-inner-box mrt-15 ">
            <img className="pr-5" src="./Images/brand/_Group 9.svg" alt=""/>
            <img className="mrL-30" src="./Images/brand/Group 147.png" alt=""/>
            <div className="gradient-2"></div>

         </div>

         </div>

      </div>

     </div>
            

                  {/* <!-- =============Counter Section============== --> */}



      <div className="counter-section">
                     <div className="counter-box">
                        <div className="counter-box-item">
                           <h2 className="counter-h2">100+</h2>
                           <p className="counter-p">Apps Integrations</p>
                        </div>
                        <div className="counter-box-item">
                           <h2 className="counter-h2">250k</h2>
                           <p className="counter-p">Total Users</p>
                        </div>
                        <div className="counter-box-item">
                           <h2 className="counter-h2">3M</h2>
                           <p className="counter-p">Total Funding</p>
                        </div>
                        <div className="counter-box-item">
                           <h2 className="counter-h2">40+</h2>
                           <p className="counter-p"> Team Members</p>
                        </div>
                     </div>
      </div>



{/* <!-- ===============project management section================== --> */}


      <div className="Project-managment-section">
      <div className="project-box">
        <h1 className="h2_2">Easy project management that helps you win</h1>
        <div className="project-tab-wrapper">
            <div className="tab">
              <a className="tab-heading" href="#">Minimal Design</a>
              <a className="tab-heading" href="#">Diverse Layout</a>
              <a className="tab-heading" href="#">Easy to Customize</a>
              <a className="tab-heading" href="#">Smooth Animation</a>
            </div>
            <div className="tab-content-wrapper">
            <div className="tab-content">
              <img className="tab-content-logo" src="./Images/brand/_Intersect.svg" alt=""/>
              <p className="tab-content-p" >Boost revenue, gain insights that help you grow and scale faster. Collaborate smoothly and communicate better.</p>
              
              <div className="tab-content-img">
                  <div className="tab-img-left">
                    <img className="mb-20 left-img-width-480" src="./Images/brand/_Group 7.svg" alt=""/>
                    <img className="left-img2-width-480" src="./Images/brand/_Group 14.svg" alt=""/>
                  </div>
                  <div className="tab-img-right">
                    <img src="./Images/brand/_Group 11.png" alt=""/>


                  </div>
              </div>
                
              

            </div>
            
        </div>
        <a className="btn-primary btn-primary-center_ " href="#">Get Started for Free</a>
        </div>
      </div>
      </div>

      {/* <!-- ======================works section============== --> */}


      <div className="work-section-wrapper">
      <div className="work-section-content">
        <h2 className="work-heading">How does it’s works?</h2>
        <div className="work-section-item1">

        <div className="work-item-content1">
            <h1 className="work-number1">1</h1>
            <div className="work-text-container1">
              <h5 className="work-text-container-heading1">Set up and get organized</h5>
              <p className="work-text-container-des1">Define your plan, set up workflows, add team members, mark deadlines and milestones, create triggers for alerts and notifications.</p>
            </div>
        </div>

        </div>

        {/* <!-- ==================work-section-item2======== --> */}

        <div className="work-section-item2">

            <div className="work-item-content2">
              <h1 className="work-number2">2</h1>
              <div className="work-text-container2">
                  <h5 className="work-text-container-heading2">Start monitoring progress
                    </h5>
                  <p className="work-text-container-des2">Monitor and analyze your team’s performance in real-time, stay ahead of potential roadblocks and delays, get periodic updates and reports.</p>
              </div>
            </div>

            <img className="work-arrow1" src="./Images/brand/Group 583.svg" alt=""/>

            </div>

            {/* <!-- ==================work-section-item3======== --> */}

        <div className="work-section-item3">

            <div className="work-item-content3">
              <h1 className="work-number3">3</h1>
              <div className="work-text-container3">
                  <h5 className="work-text-container-heading3">Stay on track throughout
                    </h5>
                  <p className="work-text-container-des3">Adapt your plan and course-correct as needed, never miss a deadline, prioritize based on situation and deliver every time.</p>
              </div>
            </div>

            <img className="work-arrow1" src="./Images/brand/Group 583.svg" alt=""/>

            </div>

      </div>
      </div>


      {/* <!-- =======================Testimonial section============== --> */}


      <div className="testimonial-wrapper">
      <div className="testimonial-content-box">
        <h1 className="testimonial-heading">Loved by industry leaders</h1>
        <div className="testimonial-slide-box">

            <div className="slide-box1">

              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>


              <p className="testimonial-p">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."</p>
              <div className="reviewer-content">
                  <div className="reviewer-img"><img src="./Images/brand/at 6.39.42 AM.png" alt=""/></div>
                  <div className="reviewer-name">
                    <p className="name">Liam Bing</p>
                    <p className="position">Web Designer at Saased</p>
                  </div>
              </div>
            </div>
            <div className="slide-box1">

              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>


              <p className="testimonial-p">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."</p>
              <div className="reviewer-content">
                  <div className="reviewer-img"><img src="./Images/brand/at 6.39.42 AM.png" alt=""/></div>
                  <div className="reviewer-name">
                    <p className="name">Liam Bing</p>
                    <p className="position">Web Designer at Saased</p>
                  </div>
              </div>
            </div>
            <div className="slide-box1">

              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>


              <p className="testimonial-p">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."</p>
              <div className="reviewer-content">
                  <div className="reviewer-img"><img src="./Images/brand/at 6.39.42 AM.png" alt=""/></div>
                  <div className="reviewer-name">
                    <p className="name">Liam Bing</p>
                    <p className="position">Web Designer at Saased</p>
                  </div>
              </div>
            </div>
            
            <div className="left-arrow">
              <img  src="./Images/brand/frame1.svg" alt=""/></div>
            <div className="right-arrow">
            <img  src="./Images/brand/Frame.svg" alt=""/>
        </div>

        </div>
      </div>
      </div>

      {/* <!-- ================integration section================= --> */}

      <div className="integration-wrapper">
      <div className="integration-box">
        <div className="integration-box-left">
            <div className="app-1"><img src="./Images/brand/Logo 18.png" alt=""/>
            </div>

            <div className="app-2">
              
              <img src="./Images/brand/Logo 16.png" alt=""/>
              <img src="./Images/brand/Logo 2.png" alt=""/>

            </div>
            <div className="app-3">
              
              <img src="./Images/brand/Logo 23.png" alt=""/>
              <img src="./Images/brand/Logo 22.png" alt=""/>
              <img src="./Images/brand/Logo 9.png" alt=""/>

            </div>

            <div className="app-2">
              
              <img src="./Images/brand/Logo 10.png" alt=""/>
              <img src="./Images/brand/Logo 8.png" alt=""/>

            </div>
            <div className="app-1"><img src="./Images/brand/Logo 20.png" alt=""/>
            </div>

        </div>
        <div className="integration-box-right">
            <h2 className="integration-box-heading">
              Integrated with  100+ apps

            </h2>
            <p className="apps-p">
              Sync messages, reports, kanban boards, data and more across your tech stack with our 2-way integration. Work at your convenience and pick up from anywhere.
            </p>
            <a className="btn-primary " href="#">View All Integrations</a>
              

        
        </div>
      </div>
      </div>


      {/* <!-- =====================Call to action section======================= --> */}

          <div className="cta-section">
          <div className="cta-box">
            <div className="cta-box-left">
                <h1 className="cta-heading">Scale faster with Projectile.</h1>
                <div className="email-cta">
                  <div>
                  <div action="" className="cta-form">
                      <input type="email" placeholder="Enter your e-mail" id="email-field" required />
                      <input type="submit" value="Get Started" id="submit"/>
                  </div>
                </div>
        </div>
        
        <div className="cta-box-right">
            <div className="cta-box1">

              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>
              <i className='bx bxs-star'></i>


              <p className="cta-testimonial-p">"Easily the best project management software on the market, right now. We became 2x faster and more efficient after adopting Projectile. Love the automated reports and alerts."</p>
              <div className="cta-reviewer-content">
                  <div className="cta-reviewer-img"><img src="./Images/brand/at 6.39.42 AM.png" alt=""/></div>
                  <div className="cta-reviewer-name">
                    <p className="cta-name">Liam Bing</p>
                    <p className="cta-position">Web Designer at Saased</p>
                  </div>
              </div>
            </div>


        </div>
      </div>
      </div>
      </div>

      {/* <!-- =====================fotter section======================= --> */}


      <div className="fotter-wrapper">
      <div className="fotter-box">
        <div className="fotter-box-left">
        <a href="#">
            <img className="fotter-logo" src="./Images/brand/logo.png" />
            <img src="./Images/brand/Projectile.svg" alt=""/>
        
        </a>
        <p className="fotter-p">
            Project management software that lets you focus on leading, not micromanaging.
        </p>
          <a className="email-link" href="#">hello@projectile.com</a>

          <div className="fotter-newslatter">
            <h5 className="newslatter-text">Subscribe to our weekly newsletter</h5>
            <div className="newslatter-email">
              <form action="">
                  <input type="email" placeholder="Enter your e-mail" id="newslatter-email-field" required />
                  <input type="submit" value="Subscribe" id="email-submit-btn" />
              </form>
            </div>
          </div>

        </div>

        <div className="fotter-box-right">
            <div className="fotter-links-box1">
              
              <a href="#">Homepage 1</a>
              <a href="#">Homepage 2</a>
              <a href="#">Homepage 3</a>
              <a href="#">About Page 1</a>
              <a href="#">About Page 2</a>
              <a href="#">About Page 3</a>
              <a href="#">Pricing Page 1</a>
              <a href="#">Pricing Page 2</a>
              <a href="#">Pricing Page 3</a>
              <a href="#">Pricing Ecommerce</a>

            </div>
            <div className="fotter-links-box1">
              
              <a href="#">Features</a>
              <a href="#">Integrations</a>
              <a href="#">Integration Details</a>
              <a href="#">Case Studies</a>
              <a href="#">Case Study Details</a>
              <a href="#">Blogs</a>
              <a href="#">Blog Details</a>
              <a href="#">Careers</a>
              <a href="#">Career Details</a>
              <a href="#">Contact Us</a>

            </div>
            <div className="fotter-links-box1">
              
              <a href="#">Demo</a>
              <a href="#">Reviews</a>
              <a href="#">Downloads</a>
              <a href="#">Sign In</a>
              <a href="#">Sign Up</a>
              <a href="#">404 Page</a>
              <a href="#">Protected Page</a>
              <a href="#">Style Guide</a>
              <a href="#">Changelog 3</a>
              <a href="#">Licenses</a>
              <a href="#">Instructions</a>


            </div>
        </div>

      </div>
      <div className="fotter-divider"></div>

      <div className="fotter-copyright">
        <p className="copyright-text">© All rights reserved ConversionFlow. Powered by Webflow.</p>
        <div className="fotter-social-link-box">

            <a className="social-link1" href="#"><img className="contain" src="./Images/brand/_Frame.svg" alt=""/></a>
            <a className="social-link2" href="#"><img className="contain" src="./Images/brand/Frame 2.svg" alt=""/></a>
            <a className="social-link3" href="#"><img className="contain" src="./Images/brand/Frame 3.svg" alt=""/></a>
            <a className="social-link4" href="#"><img className="contain" src="./Images/brand/Frame 4.svg" alt=""/></a>
        </div>
      </div>
      </div>



             





    <script src="./vendor/bostrap/jquery.slim.min.js"></script>
    <script src="./vendor/bostrap/bootstrap.bundle.min.js"></script>
    
    </div>
  )
}

export default About