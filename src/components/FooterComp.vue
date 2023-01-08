<template>
    <div class="footer">
      <div class="follow-sw">FOLLOW STAR WARS:</div>
      <div class="icons">
        <fa class="fa-icon" :icon="['fab', 'twitter']" />
        <fa class="fa-icon" :icon="['fab', 'youtube']" />
        <fa class="fa-icon" :icon="['fab', 'instagram']" />
        <fa class="fa-icon" :icon="['fab', 'facebook']" />
      </div>
      <div class="copyright">
        <sup>TM & © Lucasfilm Ltd. All Rights Reserved</sup>
      </div>
      <div class="links">
        <a href="#">Terms of Use</a> | <a href="#">Additional Content Information</a> | <a href="#">Privacy Policy</a> | <a href="#">Children’s Online Privacy Policy</a> |
        <a href="#">Interest-Based Ads</a> | <a href="#">Do Not Sell My Personal Information</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .footer {
    padding: 3rem;
    background-color: var(--card);
    border-top: 2px solid #ffffff;
    color: white;
  }

  .footer div{
    margin: 0 0 10px 0;
  }
  .footer a{
    color:rgb(236, 236, 236);
  }

  .footer a:hover{
    text-shadow: 0 0 1rem #c5c5c5;
  }

  .fa-icon {
    cursor: pointer;
    color: white;
    margin: 0 .2rem;
    font-size: 1.2rem;
  }

  .fa-icon:hover {
    color: var(--red);
  }

  .follow-sw {
    font-family: 'Poller One';
  }
  </style>
  