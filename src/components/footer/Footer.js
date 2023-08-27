import React from 'react';

const Footer = () => {

  return (
    <footer class="bg-gray-900 py-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className='text-center md:text-left'>
            <h3 class="text-lg font-semibold text-white mb-4">Subjects</h3>
            <ul class="text-gray-400">
              <li class="mb-2"><a href="#" class="hover:text-white">Physics</a></li>
              <li class="mb-2"><a href="#" class="hover:text-white">ICT</a></li>
            </ul>
          </div>
          <div className='md:text-left text-center'>
            <h3 class="text-lg font-semibold text-white mb-4 ">Contact</h3>
            <ul class="text-gray-400">
              <li class="mb-2">The Best Private Home, Nakaihat</li>
              <li class="mb-1 text-sm">(East side of Grameen Bank)</li>
              <li class="mb-1">Gobindogonj,Gaibandha</li>
              <li class="mb-2">Phone: 01701906543</li>
              <li class="mb-2">Email: almubin78@gmail.com</li>
            </ul>
          </div>
          <div className='text-center md:text-left'>
            <h3 class="text-lg font-semibold text-white mb-6 ">Social Media</h3>
            <ul class="flex space-x-8 text-gray-400  justify-center md:justify-normal">
              <li><a href="https://www.facebook.com/al.mubin.73" target='blank' class="hover:text-white bg-red-200 p-3 rounded-lg "><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="https://twitter.com/almubin78" class="hover:text-white bg-red-200 p-3 rounded-lg " target='blank'><i class="fab fa-twitter"></i></a></li>
              <li><a href="https://www.linkedin.com/in/al-mubin-sarker-b3373021a/" class="hover:text-white bg-red-200 p-3 rounded-lg " target='blank'><i class="fab fa-linkedin-in"></i></a></li>

            </ul>

          </div>
        </div>
        <hr class="border-gray-800 my-6" />
        <p class="text-center text-gray-400">© 2023 A way of Learn. All rights reserved.</p>
      </div>


    </footer>
  );
};

export default Footer;