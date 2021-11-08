import React from 'react'
import '../mystyle.css';

const Searchbox = () => {
    return (
        <div>
            <div class="col-span-3 bg-primary-700 endcard">
                <div class="fixed top-0 bg-primary-700">
                    <label class="relative inline-block mt-10 ml-3 w-80 text-gray-400 focus-within:text-gray-600">
                        <svg viewBox="0 0 512 512" class="ml-2 text-gray-400 w-5 absolute top-1/2 transform -translate-y-1/2 left-3"><path fill="currentColor" d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z" class=""></path></svg>
                        <input type="text" placeholder="Search songs, artists etc..." class="text-gray-400 bg-primary-200 rounded-3xl py-2 px-3  appearance-none w-full block pl-14 focus:outline-none" />
                    </label>
                    <svg  viewBox="0 0 512 512" class="inline fa-cog w-9 ml-5 text-gray-300 hover:text-white"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" ></path></svg>
                    <svg  viewBox="0 0 448 512" class="inline w-8 ml-5 text-gray-300 hover:text-white"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                    <div>
                        <p class="text-2xl ml-8 text-white font-bold mt-12 text-left">Stories</p>
                    </div>
                    <div class="ml-8 ">
                        <div class="flex space-x-4">
                            <div class="mt-5">
                                <img class="w-20 rounded-full border-solid border-2 border-secondary-500" src="img/stories2.jpg" alt="" />
                                <p class="text-xl text-white  mt-3 text-center">Sean</p>
                            </div>
                            <div class="mt-5">
                                <img class="w-20 rounded-full border-dashed border-2 border-secondary-500" src="img/stories1.jpg" alt=""/>
                                <p class="text-xl text-white  mt-3 text-center">Pradheep</p>
                            </div>
                            <div class="mt-5">
                                <img class="w-20 rounded-full border-solid border-2 border-secondary-500" src="img/stories3.jpg" />
                                <p class="text-xl text-white  mt-3 text-center">Sid</p>
                            </div>
                            <div class="mt-5">
                                <img class="w-20 rounded-full border-dashed border-2 border-secondary-500" src="img/stories4.jpg" />
                                <p class="text-xl text-white  mt-3 text-center">Sana</p>
                            </div>
                        </div>
                        
        {/* Recently played */} 
                       <div class="mt-10">
                                <p class="text-2xl font-bold text-white text-left" >Recently Played</p>
                                <div class="ml-5 text-gray-300 flex space-2">
                                    <div>
                                        <p class="text-xl mt-6 text-left">Therefore I Am</p>
                                        <p class="text-xl text-gray-500">Billie Eillish &nbsp;-&nbsp;02:47 </p>
                                    </div>
                                    <div class="inline">
                                        <svg  viewBox="0 0 512 512 " class="fa-play-circle w-10 text-white ml-24 mt-8"><path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z" ></path></svg>
                                    </div>
                                </div>

                            <div class="ml-5 text-gray-300 flex space-2">
                                <div>
                                    <p class="text-xl mt-7 text-left">Before You Go</p>
                                    <p class="text-xl text-gray-500">Lewis Capaldi    -&nbsp;03:35</p>
                                </div>
                                <div class="inline">
                                    <svg  viewBox="0 0 512 512 " class="fa-play-circle w-10 text-white ml-20 mt-8"><path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z" ></path></svg>
                                </div>
                            </div>

                            <div class="ml-5 text-gray-300 flex space-2">
                                <div>
                                    <p class="text-xl mt-7 text-left">Blinding Lights</p>
                                    <p class="text-xl text-gray-500">The Weeknd-&nbsp;03:20</p>
                                </div>
                                <div class="inline">
                                    <svg  viewBox="0 0 512 512 " class="fa-play-circle w-10 text-white ml-24 mt-9"><path fill="currentColor" d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zM40 256c0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216zm331.7-18l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM192 335.8V176.9c0-4.7 5.1-7.6 9.1-5.1l134.5 81.7c3.9 2.4 3.8 8.1-.1 10.3L201 341c-4 2.3-9-.6-9-5.2z" ></path></svg>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="text-2xl font-bold text-white mt-10 text-left" >Playlists</p>
                            <div class="text-xl mt-5 ml-5 text-gray-400 leading-10">
                                <p class="text-left">BEST OF 2021</p>
                                <p class="text-left">TOP MUSIC</p>
                                <p class="text-left">WORKOUT MUSIC</p>
                            </div>
                        </div><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Searchbox
