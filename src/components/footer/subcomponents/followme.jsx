import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function FollowMe() {
    return (
        <div className="rounded-lg shadow-ft shadow-white/90 p-5">
            <h1 className="text-[#202020] dark:text-white font-bold text-4xl font-sans mb-5">Follow</h1>
            <div className="flex gap-3.5">
                <Link className="bg-blue-800 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-blue-800 rounded-lg p-0.5" href="https://www.linkedin.com/in/aditya-chandra-b89470285"><svg _ngcontent-dpw-c276="" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-dpw-c276="" fill-rule="evenodd" clip-rule="evenodd" d="M0 21.593V7.649C0 3.442 3.442 0 7.649 0H21.593C25.801 0 29.243 3.442 29.243 7.649V21.593C29.243 25.8 25.801 29.242 21.593 29.242H7.649C3.442 29.242 0 25.8 0 21.593" fill="transparent" class="social-icon-bg"></path><path _ngcontent-dpw-c276="" fill-rule="evenodd" clip-rule="evenodd" d="M13.0938 11.8969H15.8057V13.1409H15.8428C16.2218 12.4249 17.1438 11.6719 18.5208 11.6719C21.3837 11.6719 21.9117 13.5549 21.9117 16.0049V20.9939H19.0858V16.5709C19.0858 15.5149 19.0647 14.1589 17.6157 14.1589C16.1447 14.1589 15.9197 15.3079 15.9197 16.4939V20.9939H13.0938V11.8969Z" fill="white"></path><path _ngcontent-dpw-c276="" fill-rule="evenodd" clip-rule="evenodd" d="M9.90762 7.375C10.8136 7.375 11.5466 8.11 11.5466 9.013C11.5466 9.918 10.8136 10.654 9.90762 10.654C8.99962 10.654 8.26562 9.918 8.26562 9.013C8.26562 8.11 8.99962 7.375 9.90762 7.375V7.375Z" fill="white"></path><path _ngcontent-dpw-c276="" fill-rule="evenodd" clip-rule="evenodd" d="M8.49219 20.9954H11.3242V11.8984H8.49219V20.9954Z" fill="white"></path></svg></Link>
                <Link className="bg-gray-800 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-gray-800 rounded-lg p-0.5" href="https://github.com/ShadowMonarch0007"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                    <g fill="transparent" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><path d="M0,256v-256h256v256z" id="bgRectangle"></path></g><g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(4,4)"><path d="M32,10c12.15,0 22,9.85 22,22c0,9.768 -6.369,18.045 -15.179,20.916c0.002,-0.008 0.006,-0.021 0.006,-0.021c0,0 -1.485,-0.696 -1.453,-1.938c0.035,-1.367 0,-4.556 0,-5.727c0,-2.01 -1.272,-3.434 -1.272,-3.434c0,0 9.977,0.112 9.977,-10.533c0,-4.107 -2.147,-6.245 -2.147,-6.245c0,0 1.128,-4.385 -0.39,-6.245c-1.701,-0.184 -4.749,1.626 -6.05,2.472c0,0 -2.062,-0.846 -5.492,-0.846c-3.43,0 -5.492,0.846 -5.492,0.846c-1.301,-0.846 -4.348,-2.656 -6.05,-2.472c-1.518,1.86 -0.39,6.245 -0.39,6.245c0,0 -2.147,2.137 -2.147,6.245c0,10.645 9.977,10.533 9.977,10.533c0,0 -1.005,1.136 -1.225,2.806c-0.696,0.236 -1.721,0.528 -2.549,0.528c-2.165,0 -3.812,-2.105 -4.416,-3.078c-0.595,-0.96 -1.815,-1.766 -2.953,-1.766c-0.749,0 -1.115,0.375 -1.115,0.803c0,0.428 1.05,0.727 1.743,1.521c1.461,1.674 1.435,5.438 6.641,5.438c0.565,0 1.719,-0.139 2.588,-0.256c-0.005,1.185 -0.007,2.436 0.012,3.167c0.031,1.242 -1.453,1.938 -1.453,1.938c0,0 0.004,0.012 0.006,0.021c-8.808,-2.873 -15.177,-11.15 -15.177,-20.918c0,-12.15 9.85,-22 22,-22z"></path></g></g>
                </svg></Link>
                <Link className="bg-gradient-to-bl from-blue-500 via-red-500 to-yellow-500 lg:from-[#333333]/70 md:from-[#333333]/70 lg:via-[#333333]/70 md:via-[#333333]/70 lg:to-[#333333]/70 md:to-[#333333]/70 hover:from-blue-500 hover:via-red-500 via-50% hover:to-yellow-500    p-0.5 rounded-lg" href="https://www.instagram.com/rs_jake/">
                    <svg xmlns="http://www.w3.org/2000/svg" className="p-1 fill-white" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
                    <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg></Link>
                <Link className="bg-sky-500 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-sky-500 rounded-lg p-0.5" href="https://t.me/rs_jake"><svg className="p-1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,50,50">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g ><path d="M5.83,23.616c12.568,-5.529 28.832,-12.27 31.077,-13.203c5.889,-2.442 7.696,-1.974 6.795,3.434c-0.647,3.887 -2.514,16.756 -4.002,24.766c-0.883,4.75 -2.864,5.313 -5.979,3.258c-1.498,-0.989 -9.059,-5.989 -10.7,-7.163c-1.498,-1.07 -3.564,-2.357 -0.973,-4.892c0.922,-0.903 6.966,-6.674 11.675,-11.166c0.617,-0.59 -0.158,-1.559 -0.87,-1.086c-6.347,4.209 -15.147,10.051 -16.267,10.812c-1.692,1.149 -3.317,1.676 -6.234,0.838c-2.204,-0.633 -4.357,-1.388 -5.195,-1.676c-3.227,-1.108 -2.461,-2.543 0.673,-3.922z"></path></g></g>
                </svg></Link>
                <Link className="bg-gray-800 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-gray-800 rounded-lg p-0.5" href="https://twitter.com/Aditya_rs_jake?s=09"><svg _ngcontent-dpw-c276="" width="40" height="40" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-dpw-c276="" fill-rule="evenodd" clip-rule="evenodd" d="M0 21.8352V7.89119C0 3.68419 3.442 0.242188 7.649 0.242188H21.593C25.8 0.242188 29.243 3.68419 29.243 7.89119V21.8352C29.243 26.0422 25.8 29.4842 21.593 29.4842H7.649C3.442 29.4842 0 26.0422 0 21.8352Z" fill="transparent"></path><path _ngcontent-dpw-c276="" d="M7.74669 8.14453L13.4082 15.7088L7.71094 21.8588H8.99317L13.9811 16.4744L18.0113 21.8588H22.3748L16.3947 13.8691L21.6977 8.14453H20.4155L15.8218 13.1035L12.1102 8.14453H7.74669ZM9.63231 9.0883H11.6369L20.4889 20.9149H18.4843L9.63231 9.0883Z" fill="white"></path></svg></Link>
                <Link className="bg-indigo-500 md:bg-[#333333]/70 lg:bg-[#333333]/70 hover:bg-indigo-500 rounded-lg p-0.5" href="http://discordapp.com/users/dragon_emperor007"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41.625,10.76953c-3.98047,-3.20313 -10.27734,-3.74609 -10.54687,-3.76563c-0.41797,-0.03516 -0.81641,0.19922 -0.98828,0.58594c-0.01562,0.02344 -0.15234,0.33984 -0.30469,0.83203c2.63281,0.44531 5.86719,1.33984 8.79297,3.15625c0.46875,0.28906 0.61328,0.90625 0.32422,1.375c-0.19141,0.30859 -0.51562,0.47656 -0.85156,0.47656c-0.17969,0 -0.36328,-0.05078 -0.52734,-0.15234c-5.03125,-3.12109 -11.3125,-3.27734 -12.52344,-3.27734c-1.21094,0 -7.49609,0.15625 -12.52344,3.27734c-0.46875,0.29297 -1.08594,0.14844 -1.375,-0.32031c-0.29297,-0.47266 -0.14844,-1.08594 0.32031,-1.37891c2.92578,-1.8125 6.16016,-2.71094 8.79297,-3.15234c-0.15234,-0.49609 -0.28906,-0.80859 -0.30078,-0.83594c-0.17578,-0.38672 -0.57031,-0.62891 -0.99219,-0.58594c-0.26953,0.01953 -6.56641,0.5625 -10.60156,3.80859c-2.10547,1.94922 -6.32031,13.33984 -6.32031,23.1875c0,0.17578 0.04688,0.34375 0.13281,0.49609c2.90625,5.10938 10.83984,6.44531 12.64844,6.50391c0.00781,0 0.01953,0 0.03125,0c0.32031,0 0.62109,-0.15234 0.80859,-0.41016l1.82813,-2.51562c-4.93359,-1.27344 -7.45312,-3.4375 -7.59766,-3.56641c-0.41406,-0.36328 -0.45312,-0.99609 -0.08594,-1.41016c0.36328,-0.41406 0.99609,-0.45312 1.41016,-0.08984c0.05859,0.05469 4.69922,3.99219 13.82422,3.99219c9.14063,0 13.78125,-3.95312 13.82813,-3.99219c0.41406,-0.35937 1.04297,-0.32422 1.41016,0.09375c0.36328,0.41406 0.32422,1.04297 -0.08984,1.40625c-0.14453,0.12891 -2.66406,2.29297 -7.59766,3.56641l1.82813,2.51563c0.1875,0.25781 0.48828,0.41016 0.80859,0.41016c0.01172,0 0.02344,0 0.03125,0c1.80859,-0.05859 9.74219,-1.39453 12.64844,-6.50391c0.08594,-0.15234 0.13281,-0.32031 0.13281,-0.49609c0,-9.84766 -4.21484,-21.23828 -6.375,-23.23047zM18.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4zM31.5,30c-1.93359,0 -3.5,-1.78906 -3.5,-4c0,-2.21094 1.56641,-4 3.5,-4c1.93359,0 3.5,1.78906 3.5,4c0,2.21094 -1.56641,4 -3.5,4z"></path></g></g>
                </svg></Link>
            </div>
        </div>
    );
}