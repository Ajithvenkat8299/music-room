import React from 'react'
import '../mystyle.css';

const Explore = () => {
    return (
        <div>
            <div class="col-span-7 bg-primary-400 ml-80">
                    <div class="ml-10"><br/><br/>
                        <p class="text-4xl text-white font-bold text-left">Explore</p>
                        <div class="flex">
                            <div class="">
                                <p class="text-2xl text-white mt-10 font-bold ml-1 ">Top Songs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                            </div>
                            <div class="mt-12">
                                <button class="btn-1 ml-96">See All</button>
                            </div>
                        </div>
                        <div class="flex space-x-12">
                            <div class="mt-5">
                                <img class="w-72" src="img/row31.jpg" />
                                <p class="text-2xl text-white text-center mt-3">Enjoy Enjaami</p>
                                <p class="text-xl text-gray-400 text-center">Dhee Arivu</p>
                            </div>
                            <div class="mt-5" onclick="toggleplay1()">
                                <img class="w-72" src="img/row32.jpg"/>
                                <p class="text-2xl text-white text-center mt-3">Nethu</p>
                                <p class="text-xl text-gray-400 text-center">Dhanush</p>
                            </div>
                            <div class="mt-5 ">
                                <img class="w-72" src="img/row33.jpg"/>
                                <p class="text-2xl text-white text-center mt-3">Rakita Rakita</p>
                                <p class="text-xl text-gray-400 text-center">Dhanush</p>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div class="ml-12 ">
                            <div class="flex">
                                <div class="">
                                    <p class="text-2xl text-white mt-10 font-bold ml-1 ">Music Artists&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                </div>
                                <div class="mt-12">
                                    <button class="btn-1 ml-96">See All</button>
                                </div>
                            </div>
                            
                            <div class="flex space-x-10">
                                <div class="mt-5">
                                    <img class="w-52 rounded-full" src="img/row21.jpg"/>
                                    <p class="text-2xl text-white  mt-3 text-center">Yuvan Shankar Raja</p>
                                </div>
                                <div class="mt-5">
                                    <img class="w-52 rounded-full" src="img/row22.jpg"/>
                                    <p class="text-2xl text-white  mt-3 text-center">Anirudh</p>
                                </div>
                                <div class="mt-5 ">
                                    <img class="w-52 rounded-full" src="img/row23.jpg" />
                                    <p class="text-2xl text-white  mt-3 text-center">A R Rahman</p>
                                </div>
                                <div class="mt-5 ">
                                    <img class="w-52 rounded-full" src="img/row24.jpg"/>
                                    <p class="text-2xl text-white  mt-3 text-center">G V Prakash</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="ml-12 ">

                        <div class="flex">
                                <div class="">
                                    <p class="text-2xl text-white mt-10 font-bold ml-1 ">New Release&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                </div>
                                <div class="mt-12">
                                    <button class="btn-1 ml-96">See All</button>
                                </div>
                        </div>
                        <div class="flex space-x-12">
                            <div class="mt-5">
                                <img class="w-72" src="img/row1.jpg"/>
                                <p class="text-2xl text-white  mt-3 text-center">Vaathi Coming</p>
                                <p class="text-xl text-gray-400 text-center">Vijay</p>
                            </div>
                            <div class="mt-5 ">
                                <img class="w-72" src="img/row12.jpg"/>
                                <p class="text-2xl text-white  mt-3 text-center">Naanga Vera Maari</p>
                                <p class="text-xl text-gray-400 text-center">Yuvan </p>
                            </div>
                            <div class="mt-5 ">
                                <img class="w-72" src="img/row13.jpg"/>
                                <p class="text-2xl text-white  mt-3 text-center">Neeye Oli</p>
                                <p class="text-xl text-gray-400 text-center">Santhosh Narayanan</p>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

        </div>
    )
}

export default Explore
