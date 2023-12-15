
// Splash Page-------------------------------------------------------------------

// contact us

const contactUs = document.querySelector(".contact-us");
const contactUsButton = document.querySelector(".contact-us-button");
const ContactcloseButton = document.querySelector('.contact-us-close-button');

contactUsButton.addEventListener("click" , () =>{
    contactUs.classList.add("page-open");
});

ContactcloseButton.addEventListener("click" , () => {
    contactUs.classList.remove('page-open');
});

// contact us


// packages

const packagesButton = document.querySelector('.packages-button');
const packagesModal = document.querySelector('.packages-modal');
const PackagescloseButton = document.querySelector('.packages-close-button');

packagesButton.addEventListener("click" , () =>{
    packagesModal.showModal();
});

PackagescloseButton.addEventListener("click" , () => {
    
    packagesModal.setAttribute("closing", "");
    packagesModal.addEventListener("animationend", () => {
        packagesModal.removeAttribute("closing");
        packagesModal.scrollTo(0, 0);
        packagesModal.close();
    }, {once: true})

});

// packages

//features

const featuresButton = document.querySelector('.features-button');
const featuresModal = document.querySelector('.features-modal');
const FeaturescloseButton = document.querySelector('.features-close-button');

featuresButton.addEventListener("click" , () =>{
    featuresModal.showModal();
});

FeaturescloseButton.addEventListener("click" , () => {
    
    featuresModal.setAttribute("closing", "");
    featuresModal.addEventListener("animationend", () => {
        featuresModal.removeAttribute("closing");
        featuresModal.scrollTo(0, 0);
        eccomCarousel.scrollTo(0, 0);
        featuresModal.close();
    }, {once: true})
});

//featuress

// Splash Page---------------------------------------------------------------------


// Features Page-------------------------------------------------------------------

// Eccomerce Section -----------------------

// ecommerce carousel ----------
const eccomCarousel = document.getElementById("eccomcarousel");

// Add a "mousedown" event listener to the carousel
eccomCarousel.addEventListener("mousedown", function(event) {
  // Set a flag to indicate that the mouse is down
  var isMouseDown = true;

  // Store the initial position of the mouse
  var initialMouseX = event.clientX;

  // Add a "mousemove" event listener to the document
  // This will fire when the mouse is moved, even if it's outside the carousel element
  document.addEventListener("mousemove", function(event) {
    if (isMouseDown) {
      // Calculate the distance the mouse has moved since the last "mousemove" event
      var mouseDelta = event.clientX - initialMouseX;

      // Update the initial mouse position for the next "mousemove" event
      initialMouseX = event.clientX;

      // Move the carousel by the distance the mouse has moved
      eccomCarousel.scrollLeft -= mouseDelta;
    }
  });

  // Add a "mouseup" event listener to the document
  // This will fire when the mouse is released, even if it's outside the carousel element
  document.addEventListener("mouseup", function(event) {
    // Set the flag to indicate that the mouse is no longer down
    isMouseDown = false;
  });
});
// ecommerce carousel ----------

// ecom-overview----

const eccomerceOverviewbutton = document.querySelector('.eccomerce-overview-button');
const eccomerceOverviewcloseButton = document.querySelector('.eccomerce-overview-close-button');
const eccomerceOverviewmodal = document.querySelector(".eccomerce-overview-modal");

eccomerceOverviewbutton.addEventListener("click" , () => {
eccomerceOverviewmodal.showModal();
});


eccomerceOverviewcloseButton.addEventListener("click" , () => {
    
    eccomerceOverviewmodal.setAttribute("closing", "");
    eccomerceOverviewmodal.addEventListener("animationend", () => {
        eccomerceOverviewmodal.removeAttribute("closing");
        eccomerceOverviewmodal.scrollTo(0, 0);
        eccomerceOverviewmodal.close();
    }, {once: true})
});
// ecom-overview----

// Product Management section
const eccomerceProductManagementButton = document.querySelector('.eccomerce-product-management-button');
const eccomerceProductManagementCloseButton = document.querySelector('.eccomerce-product-management-close-button');
const eccomerceProductManagementModal = document.querySelector(".eccomerce-product-management-modal");

eccomerceProductManagementButton.addEventListener("click" , () => {
eccomerceProductManagementModal.showModal();
});

eccomerceProductManagementCloseButton.addEventListener("click" , () => {
  eccomerceProductManagementModal.setAttribute("closing", "");
  eccomerceProductManagementModal.addEventListener("animationend", () => {
    eccomerceProductManagementModal.removeAttribute("closing");
    eccomerceProductManagementModal.scrollTo(0, 0);
    eccomerceProductManagementModal.close();
  }, {once: true})
});

// Back Office section
const eccomerceBackOfficeButton = document.querySelector('.eccomerce-back-office-button');
const eccomerceBackOfficeCloseButton = document.querySelector('.eccomerce-back-office-close-button');
const eccomerceBackOfficeModal = document.querySelector(".eccomerce-back-office-modal");

eccomerceBackOfficeButton.addEventListener("click" , () => {
eccomerceBackOfficeModal.showModal();
});

eccomerceBackOfficeCloseButton.addEventListener("click" , () => {
  eccomerceBackOfficeModal.setAttribute("closing", "");
  eccomerceBackOfficeModal.addEventListener("animationend", () => {
    eccomerceBackOfficeModal.removeAttribute("closing");
    eccomerceBackOfficeModal.scrollTo(0, 0);
    eccomerceBackOfficeModal.close();
  }, {once: true})
});

// Check Out Process section
const eccomerceCheckOutProcessButton = document.querySelector('.eccomerce-check-out-process-button');
const eccomerceCheckOutProcessCloseButton = document.querySelector('.eccomerce-check-out-process-close-button');
const eccomerceCheckOutProcessModal = document.querySelector(".eccomerce-check-out-process-modal");

eccomerceCheckOutProcessButton.addEventListener("click" , () => {
eccomerceCheckOutProcessModal.showModal();
});

eccomerceCheckOutProcessCloseButton.addEventListener("click" , () => {
  eccomerceCheckOutProcessModal.setAttribute("closing", "");
  eccomerceCheckOutProcessModal.addEventListener("animationend", () => {
    eccomerceCheckOutProcessModal.removeAttribute("closing");
    eccomerceCheckOutProcessModal.scrollTo(0, 0);
    eccomerceCheckOutProcessModal.close();
  }, {once: true})
});

// Payment Options section
const eccomercePaymentOptionsButton = document.querySelector('.eccomerce-payment-options-button');
const eccomercePaymentOptionsCloseButton = document.querySelector('.eccomerce-payment-options-close-button');
const eccomercePaymentOptionsModal = document.querySelector(".eccomerce-payment-options-modal");

eccomercePaymentOptionsButton.addEventListener("click" , () => {
eccomercePaymentOptionsModal.showModal();
});

eccomercePaymentOptionsCloseButton.addEventListener("click" , () => {
  eccomercePaymentOptionsModal.setAttribute("closing", "");
  eccomercePaymentOptionsModal.addEventListener("animationend", () => {
    eccomercePaymentOptionsModal.removeAttribute("closing");
    eccomercePaymentOptionsModal.scrollTo(0, 0);
    eccomercePaymentOptionsModal.close();
  }, {once: true})
});

// Order Details section
const eccomerceOrderDetailsButton = document.querySelector('.eccomerce-order-details-button');
const eccomerceOrderDetailsCloseButton = document.querySelector('.eccomerce-order-details-close-button');
const eccomerceOrderDetailsModal = document.querySelector(".eccomerce-order-details-modal");

eccomerceOrderDetailsButton.addEventListener("click" , () => {
eccomerceOrderDetailsModal.showModal();
});

eccomerceOrderDetailsCloseButton.addEventListener("click" , () => {
  eccomerceOrderDetailsModal.setAttribute("closing", "");
  eccomerceOrderDetailsModal.addEventListener("animationend", () => {
    eccomerceOrderDetailsModal.removeAttribute("closing");
    eccomerceOrderDetailsModal.scrollTo(0, 0);
    eccomerceOrderDetailsModal.close();
  }, {once: true})
});

// Shipping section
const eccomerceShippingButton = document.querySelector('.eccomerce-shipping-button');
const eccomerceShippingCloseButton = document.querySelector('.eccomerce-shipping-close-button');
const eccomerceShippingModal = document.querySelector(".eccomerce-shipping-modal");

eccomerceShippingButton.addEventListener("click" , () => {
eccomerceShippingModal.showModal();
});

eccomerceShippingCloseButton.addEventListener("click" , () => {
  eccomerceShippingModal.setAttribute("closing", "");
  eccomerceShippingModal.addEventListener("animationend", () => {
    eccomerceShippingModal.removeAttribute("closing");
    eccomerceShippingModal.scrollTo(0, 0);
    eccomerceShippingModal.close();
  }, {once: true})
});

// Marketing section
const eccomerceMarketingButton = document.querySelector('.eccomerce-marketing-button');
const eccomerceMarketingCloseButton = document.querySelector('.eccomerce-marketing-close-button');
const eccomerceMarketingModal = document.querySelector(".eccomerce-marketing-modal");

eccomerceMarketingButton.addEventListener("click" , () => {
eccomerceMarketingModal.showModal();
});

eccomerceMarketingCloseButton.addEventListener("click" , () => {
  eccomerceMarketingModal.setAttribute("closing", "");
  eccomerceMarketingModal.addEventListener("animationend", () => {
    eccomerceMarketingModal.removeAttribute("closing");
    eccomerceMarketingModal.scrollTo(0, 0);
    eccomerceMarketingModal.close();
  }, {once: true})
});


// Eccomerce Section -----------------------

// Features Page---------------------------------------------------------------------














