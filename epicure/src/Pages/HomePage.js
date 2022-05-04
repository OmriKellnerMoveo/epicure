import MainCover from "../component/CoverImageComponent/MainCover";
import SectionTitle from "../component/SectionTitle/SectionTitle";
import {
    chef_of_the_week_str,
    chefs_restaurants,
    popular_restaurants,
    signature_dish
} from "../utils/DictioneryManagement";
import React from "react";
import './HomePage.css'
import All_Restaurants_link from "../component/All_Restaurants_link/All_Restaurants_link";
import {RowCard_1, RowCard_2, RowCard_3} from "../utils/DefualtJson";
import IconsMeaning from "../component/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../component/ChefOfTheWeek/ChefOfTheWeek";
import SubSectionTitle from "../component/ChefRestaurants/SubSectionTitle";
import AboutUs from "../component/AboutUs/AboutUs";
import Splide from "../component/Card/RowCards";

const HomePage = () => {

    return (<>
            <MainCover />
            <SectionTitle title={popular_restaurants} marginTop={'10vw'}/>
            <Splide card_list={RowCard_1} type={1}/>
            <All_Restaurants_link/>
            <SectionTitle title={signature_dish} marginTop={'10vw'}/>
            <Splide card_list={RowCard_2} type={2}/>
            <IconsMeaning/>
            <SectionTitle title={chef_of_the_week_str}/>
            <ChefOfTheWeek/>
            <SubSectionTitle title={chefs_restaurants} alignLeft/>
            <Splide card_list={RowCard_3} type={3}/>
            <AboutUs/>
        </>

    )
}
export default HomePage
