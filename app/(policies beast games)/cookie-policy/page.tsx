import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-[1550px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="md:col-span-6 anton-regular">
            <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-6">
            <div className="space-y-4">
              <p className="mt-4">
                Please read this cookie policy ("cookie policy", "policy") carefully before using MysticArt Pictures 
                website ("website", "service") operated by MysticArt Pictures LLC ("us", 'we", "our").
              </p>
              
              <h3 className="text-xl font-bold mt-6">What are cookies?</h3>
              
              <p className="mt-4">
                Cookies are simple text files that are stored on your computer or mobile device by a website's server. 
                Each cookie is unique to your web browser. It will contain some anonymous information such as a unique 
                identifier, website's domain name, and some digits and numbers. For example, we use cookies to allow 
                you to save your password so you do not have to re-enter it each time you visit the Site. MysticArt 
                Pictures' Site may also contain web beacons (also called single-pixel gifs) that may be used to help 
                deliver cookies on our Sites and allow us to track the number of visitors who have visited those pages.
              </p>
              
              <h3 className="text-xl font-bold mt-6">What types of cookies do we use?</h3>
              
              <p className="mt-4">
                <strong>Necessary cookies</strong>
              </p>
              
              <p className="mt-2">
                Necessary cookies allow us to offer you the best possible experience when accessing and navigating 
                through our website and using its features. For example, these cookies let us recognize that you have 
                created an account and have logged into that account.
              </p>
              
              <p className="mt-4">
                <strong>Functionality cookies</strong>
              </p>
              
              <p className="mt-2">
                Functionality cookies let us operate the site in accordance with the choices you make. For example, 
                we will recognize your username and remember how you customized the site during future visits.
              </p>
              
              <p className="mt-4">
                <strong>Analytical cookies</strong>
              </p>
              
              <p className="mt-2">
                These cookies enable us and third-party services to collect aggregated data for statistical purposes 
                on how our visitors use the website. These cookies do not contain personal information such as names 
                and email addresses and are used to help us improve your user experience of the website.
              </p>
              
              <h3 className="text-xl font-bold mt-6">How to delete cookies?</h3>
              
              <p className="mt-4">
                If you want to restrict or block the cookies that are set by our website, you can do so through your 
                browser setting. Alternatively, you can visit <a href="http://www.internetcookies.com/" className="underline">www.internetcookies.com</a>, 
                which contains comprehensive information on how to do this on a wide variety of browsers and devices. 
                You will find general information about cookies and details on how to delete cookies from your device.
              </p>
              
              <h3 className="text-xl font-bold mt-6">Contacting us</h3>
              
              <p className="mt-4">
                If you have any questions about this policy or our use of cookies, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;