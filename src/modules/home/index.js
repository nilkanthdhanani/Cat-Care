import React from 'react';
import './home.scss';
import { cat1, cat2, cat3, thinking, catlove1, catlove2, catlove3, mailCat, ladyCat, ladyCat2 } from '../../assets/images/jpg.js';
import { facebook2, google2, instagram2, twitter2 } from '../../assets/images/svg.js';

export default function Home() {
  const details = [
    { title: 'PET GUIDE' },
    { title: 'TOP TIPS' },
    { title: 'BEST TOYS' },
    { title: 'CAT PRODUCTS' },
    { title: 'CAT LOVERS' },
    { title: 'GIFTS FOR CATS' },
  ];

  const commonText = 'Sample text. Click to select the text box. Click again or double click to start editing the text.';

  return (
    <div>
      <section className="hero-banner">
        <div className="container">
          <div className="hero-banner-text">
            <span>TIPS FOR LIFE WITH CATS</span>
            <h1>CAT STORIES, NEWS, TIPS & TRICKS</h1>
          </div>
        </div>
      </section>

      <section className="welcome">
        <div className="container2">
          <div className="welcome-head">
            <h2>Welcome to Club Cat Blog</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          </div>
          <div className="welcome-grid">
            {[cat1, cat2, cat3].map((cat, index) => (
              <div key={index} className={`welcome-grid-box welcome-grid-box${index + 1}`}>
                <img src={cat} alt={`cat${index + 1}`} />
                <h3>Cat Cafe</h3>
                <p>Etiam erat velit scelerisque in dictum non consectetur. Nisl purus in mollis nunc sed id semper. Cras fermentum odio eu feugiat pretium nibh ipsum. Tristique senectus</p>
                <a href="more">MORE</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="thinking">
        <div className="container">
          <div className="thinking-div">
            <img src={thinking} alt="thinking" />
            <div className="thinking-div1">
              <span>CAT BLOG</span>
              <h2>Thinking of getting a cat?</h2>
            </div>
            <div className="thinking-div2">
              <h3>Cat Care for Beginners</h3>
              <ol>
                {["Provide plenty of human companionship.", "Provide regular, suitable meals with a constant supply of fresh water.", "Provide a clean and comfortable bed.", "Provide the cat with outdoor access or be prepared to empty and clean a litter tray on a daily basis."]
                  .map((tip, index) => <li key={index}>{tip}</li>)}
              </ol>
              <div className="read-more-button">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cat-love">
        <div className="container3">
          <div className="cat-love-grid">
            {[catlove1, catlove2, catlove3].map((cat, index) => (
              <div key={index} className="cat-love-grid-box">
                <img src={cat} alt={`catlove${index + 1}`} />
              </div>
            ))}
            <div className="cat-love-grid-box">
              <div className="cat-love-grid-box-text">
                <h2>Why do we love cats?</h2>
                <p>Adipiscing bibendum est ultricies integer quis auctor elit. Eget nunc scelerisque viverra mauris in. Volutpat est velit egestas dui id. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Nulla pharetra diam sit amet nisl. Lorem ipsum dolor sit amet consectetur adipiscing elit. Tempus quam pellentesque nec nam aliquam sem et. Nunc</p>
                <div className="read-more-button">
                  <button>READ MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mailbox'>
        <div className="container">
          <div className="mailbox-img">
            <img src={mailCat} alt="mailcat" />
          </div>
          <h2>Get the greatest stories right in your mailbox</h2>
          <div className="mailbox-input">
            <input type="email" placeholder='Enter a valid email address' />
            <button>SUBMIT</button>
          </div>
          <p>And don’t worry, we hate spam too! You can unsubcribe at anytime.</p>
        </div>
      </section>

      <section className='details'>
        <div className="container">
          <div className="details-div">
            <img src={ladyCat} alt="ladyCat" />
            <div className="details-div-grid">
              {details.map((detail, index) => (
                <div className="details-div-grid-box" key={index}>
                  <h3>{detail.title}</h3>
                  <p>{commonText}</p>
                  <a href="more">MORE</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='keep-happy'>
        <div className="container">
          <div className="keep-happy-grid">
            <div className="khg-div1">
              <h2>Keeping Pets Happy</h2>
              <p>Cras adipiscing enim eu turpis egestas pretium aenean pharetra magna. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Ut faucibus pulvinar elementum <u>integer</u> enim neque volutpat. Augue mauris augue neque gravida in. Venenatis cras sed felis eget velit aliquet sagittis. Morbi leo urna molestie at.</p>
              <div className="read-more-button">
                <button>READ MORE</button>
              </div>
            </div>
            <div className="khg-div2">
              <div className="khg-div2-round">
                <img src={ladyCat2} alt="ladyCat2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='help'>
        <div className="container4">
          <div className="help-div">
            <div className="help-div1">
              <h2>Need Help?</h2>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <div className="help-social-media">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <img src={facebook2} alt="facebook" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                  <img src={twitter2} alt="twitter" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <img src={instagram2} alt="instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src={google2} alt="message" />
                </a>
              </div>
            </div>
            <div className="help-div2">
              <div className="help-input">
                <label>Name</label>
                <input type="text" placeholder='Enter your Name' />
              </div>
              <div className="help-input-flex">
                <div className="help-input">
                  <label>Phone</label>
                  <input type="text" placeholder='Enter your phone (e.g. +14155552675)' />
                </div>
                <div className="help-input">
                  <label>Email</label>
                  <input type="email" placeholder='Enter a valid email address' />
                </div>
              </div>
              <div className="help-button">
                <button>SUBMIT </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
