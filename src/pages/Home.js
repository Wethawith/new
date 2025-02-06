import React from "react";
import '../style/home_st.css';
import room1 from '../img/r1.jpg';
import room2 from '../img/r2.jpg';
import room3 from '../img/r3.jpg';

function Home () {
    return (
        <div className="Home">
            <nav class="navbar">
                <div class="container">
                    <a class="navbar-brand" href="#"></a>
                </div>
            </nav>
            <div class="header-section">
                <h2>Find Your Perfect Stay</h2>
                <div class="search-bar">
                <form action="rooms.html" method="GET" class="row g-3">
                    <div class="col-md-6">
                        <label for="stayType" class="form-label">Stay Type</label>
                        <select id="stayType" name="stayType" class="form-select">
                            <option selected>Dormitory</option>
                            <option>Apartment</option>
                        </select>
                    </div>
                    <div class="col-md-3">
                        <label for="checkIn" class="form-label">Check-In</label>
                        <input type="date" id="checkIn" name="checkIn" class="form-control"/>
                    </div>
                    <div class="col-md-3">
                        <label for="checkOut" class="form-label">Check-Out</label>
                        <input type="date" id="checkOut" name="checkOut" class="form-control"/>
                    </div>
                    <div class="col-md-6">
                        <label for="guests" class="form-label">Guests</label>
                        <select id="guests" name="guests" class="form-select">
                            <option selected>1 Room, 2 Adults</option>
                        </select>
                    </div>
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <button type="submit" class="btn btn-primary w-100">Search</button>
                    </div>
                </form> 
                </div>
            </div>
            <div class="home-stay">
                <img src={room1} alt=""/>
                <img src={room2} alt=""/>
                <img src={room3} alt=""/>
            </div>
        </div>
    );
}

export default Home;