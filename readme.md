<!-- Adapted from Readme Template at https://github.com/othneildrew/Best-README-Template -->
<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!--
    Logo Image adapted from Christoph Scholz
      Original URL: https://www.flickr.com/photos/140988606@N08/28124222664
      License: https://creativecommons.org/licenses/by-sa/2.0/legalcode
   -->
  <a href="https://github.com/Kurohyou/password-generator-sc">
    <img style="border-radius:50%;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;" src="assets/images/cropped_lock.jpg" alt="Cyberlock Logo" width="80" height="80">
  </a>

<h3 align="center">Password Generator</h3>

  <p align="center">
    A simple on demand password generator.
    <br />
    <a href="https://github.com/Kurohyou/password-generator-sc"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kurohyou.github.io/password-generator-sc/">View Site</a>
    ·
    <a href="https://github.com/Kurohyou/password-generator-sc/issues">Report Bug</a>
    ·
    <a href="https://github.com/Kurohyou/password-generator-sc/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#acceptance-criteria">Acceptance Criteria</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Using the Generator</a>
    </li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is an on demand password generator. It creates passwords that meet a variety of requirements and each password generation is customizable to meet a different set of requirements.
[![Product Name Screen Shot][product-screenshot]][product-screenshot]

<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>

### Built With
* JS
* HTML
* CSS

<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>

### Acceptance Criteria
```
GIVEN I need a new, secure password X
WHEN I click the button to generate a password X
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria X
THEN I select which criteria to include in the password X
WHEN prompted for the length of the password X
THEN I choose a length of at least 8 characters and no more than 128 characters X
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters X
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected X
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria X
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page X
```
<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>

<!-- Using the Generator -->
## Using the Generator

Simply visit the deployed site and click the `Generate Password` button to be prompted for your password criteria. The generated password will be placed in the textarea above the button. Click it to copy it.

<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See [LICENSE.txt][license-url] for more information.

<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [othneildrew's Excellent Readme Template](https://github.com/othneildrew/Best-README-Template)
* [Christoph Scholz for the original logo image](https://www.flickr.com/photos/140988606@N08/28124222664)
* [Xander Rapstine For the original code](https://github.com/coding-boot-camp/friendly-parakeet)

<p align="right">(<a style="color:black;" href="#top">Back to Top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/Kurohyou/password-generator-sc.svg?style=for-the-badge
[contributors-url]: https://github.com/Kurohyou/password-generator-sc/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Kurohyou/password-generator-sc.svg?style=for-the-badge
[forks-url]: https://github.com/Kurohyou/password-generator-sc/network/members
[stars-shield]: https://img.shields.io/github/stars/Kurohyou/password-generator-sc.svg?style=for-the-badge
[stars-url]: https://github.com/Kurohyou/password-generator-sc/stargazers
[issues-shield]: https://img.shields.io/github/issues/Kurohyou/password-generator-sc.svg?style=for-the-badge
[issues-url]: https://github.com/Kurohyou/password-generator-sc/issues
[license-shield]: https://img.shields.io/github/license/Kurohyou/password-generator-sc.svg?style=for-the-badge
[license-url]: https://github.com/Kurohyou/password-generator-sc/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/scott-casey-20210398/
[product-screenshot]: assets/images/preview.png
[deployed-url]:https://kurohyou.github.io/password-generator-sc/