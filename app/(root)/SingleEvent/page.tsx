import { EventImg, Mine_logo, Render } from '@/public'
import Image from 'next/image'
import React from 'react'

import './index.css'
import Link from 'next/link'
import { FaChevronLeft, FaFacebook, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { BsShare } from 'react-icons/bs';


import '../../../public/Renderer Desktop - Stadium 2.png'
import { IoIosArrowBack } from 'react-icons/io'

const SingleEvent = () => {
    return (
        <>
        <div className='main_container'>
            <div className='single_event_sec'>
                <div className="single_event_upper">
                        <Image src={EventImg} alt='EventImg' className="single_event_img" />

                </div>
                <div className="single_event_lower">
                    <div className="single_event_info">
                        <div className="single_event_infoo">

                            <div className="single_eventt">
                                <h2>Event Title</h2>
                                <p>Sat, July 15, 2025 • 7:30 PM</p>

                            </div>
                            <div className="venue_n">
                                <h3>Venue Name</h3>
                                <p>Venue Location</p>
                            </div>
                            <div className="Description_event">
                                <h3>Description</h3>
                                <p>This is a sample description of this event</p>
                            </div>
                        </div>

                        <div className="organized_by">
                            <h2>Organized by</h2>
                            <p>Organizer Name</p>
                            <p>(###) ### - ####</p>
                            <p>email@email.com</p>
                            <Image src={Mine_logo} alt='' className="img_fake" />
                        </div>
                    </div>
                    <div className="single_event_CTR">
                        <div className="single_event_age">
                            <p>Age Restriction</p>
                            <p className="plus">18+</p>
                            <p className="after_none">$70 - $90</p>
                            <div className="box after_none">
                                <a className="btn" href="#popup14">Get Tickets</a>
                            </div>
                            <div id="popup14" className="overlay">

                                <div className="get_ticketp">
                                    <a className="jclose" href="#">
                                        <RiCloseFill color="#FAE100" className="Xmarks" />
                                    </a>


                                    <div className="get_ticket_over">
                                        <div className="get_ticket_overi">

                                            <h1>Event Title</h1>
                                            {/* <p className="res_yellow">Saturday, July 5, 2025 at 7:30 pm PST</p> */}
                                            <p className="res_p">Select your seat(s) or table(s) below to add it to your cart</p>
                                        </div>
                                        <Image alt='' src={Render} className="res_triangle" />
                                        <div className="promo_ticket">
                                            <form action="" className="promo_cl res_none">
                                                <label htmlFor="promo">Promo Code</label>
                                                <div className="promo_ticket_input">
                                                    <input type="text" />
                                                    <button type="submit">Apply</button>
                                                </div>
                                            </form>
                                            <div className="box">
                                                <a className="btn res_none" href="#popup15">Get Tickets</a>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="get_ticket_cart res_none">

                                        <div className="get_ticket_carti"></div>
                                        <div className="cart_ticker">
                                            <h2>Cart</h2>
                                            <div className="order_sum_text">

                                                <div className="order_summary_data">
                                                    <p className="no">x1</p>
                                                    <div className="order_tinfo">
                                                        <p className="type_name">Ticket Type Name </p>
                                                        <p className="type_id">Seat ID or Table ID or Both</p>
                                                    </div>
                                                    <div className="order_pinfo">$25.00</div>
                                                    <div className="order_trash">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                            viewBox="0 0 15 15" fill="none">
                                                            <path
                                                                d="M3.04688 15H11.9531V2.34375H12.6562V1.875H9.375V0H5.625V1.875H2.34375V2.34375H3.04688V15ZM6.09375 0.46875H8.90625V1.875H6.09375V0.46875ZM11.4844 2.34375V14.5312H3.51562V2.34375H11.4844Z"
                                                                fill="#FF0000" />
                                                            <path d="M6.32812 4.6875H5.85938V12.6562H6.32812V4.6875Z"
                                                                fill="#FF0000" />
                                                            <path d="M9.14062 4.6875H8.67188V12.6562H9.14062V4.6875Z"
                                                                fill="#FF0000" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="order_summary_data">
                                                    <p className="no">x1</p>
                                                    <div className="order_tinfo">
                                                        <p className="type_name">Ticket Type Name </p>
                                                        <p className="type_id">Seat ID or Table ID or Both</p>
                                                    </div>
                                                    <div className="order_pinfo">$25.00</div>
                                                    <div className="order_trash">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                            viewBox="0 0 15 15" fill="none">
                                                            <path
                                                                d="M3.04688 15H11.9531V2.34375H12.6562V1.875H9.375V0H5.625V1.875H2.34375V2.34375H3.04688V15ZM6.09375 0.46875H8.90625V1.875H6.09375V0.46875ZM11.4844 2.34375V14.5312H3.51562V2.34375H11.4844Z"
                                                                fill="#FF0000" />
                                                            <path d="M6.32812 4.6875H5.85938V12.6562H6.32812V4.6875Z"
                                                                fill="#FF0000" />
                                                            <path d="M9.14062 4.6875H8.67188V12.6562H9.14062V4.6875Z"
                                                                fill="#FF0000" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order_main_list">
                                                <div className="order_list_items">
                                                    <div className="order_list_item">
                                                        <p>Subtotal</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Taxes</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Service Fees</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Total</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                </div>




                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="single_sticky_bar2 pc_none2">
                                    <div className="sticky_inner2">
                                        <a href="#popup19">

                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M19.9266 25.4131C17.8146 25.4131 16.125 27.1027 16.125 29.2147C16.125 31.3267 17.8146 33.0164 19.9266 33.0164C22.0387 33.0164 23.7283 31.3267 23.7283 29.2147C23.7283 27.1555 21.9858 25.4131 19.9266 25.4131ZM19.9266 30.6931C19.1346 30.6931 18.501 30.0595 18.501 29.2675C18.501 28.4755 19.1346 27.8419 19.9266 27.8419C20.7186 27.8419 21.3522 28.4755 21.3522 29.2675C21.3522 30.0067 20.6658 30.6931 19.9266 30.6931Z" fill="#FAE100" />
                                                <path d="M9.89441 25.4131C7.78239 25.4131 6.09277 27.1027 6.09277 29.2147C6.09277 31.3267 7.78239 33.0164 9.89441 33.0164C12.0064 33.0164 13.696 31.3267 13.696 29.2147C13.696 27.1555 11.9536 25.4131 9.89441 25.4131ZM9.89441 30.6931C9.1024 30.6931 8.46879 30.0595 8.46879 29.2675C8.46879 28.4755 9.1024 27.8419 9.89441 27.8419C10.6864 27.8419 11.32 28.4755 11.32 29.2675C11.32 30.0067 10.6864 30.6931 9.89441 30.6931Z" fill="#FAE100" />
                                                <path d="M31.0679 1.125H28.2167C26.9495 1.125 25.8407 2.07541 25.6823 3.34262L24.8375 9.41467H22.6199V5.56024C22.5671 4.60983 21.8279 3.87062 20.9303 3.87062H17.023C16.8646 3.07862 16.1782 2.49781 15.3862 2.49781H10.7926C9.89496 2.49781 9.10296 3.28982 9.10296 4.29303V5.29624H5.24853C4.35092 5.29624 3.55891 6.03544 3.55891 6.88025V9.46747C3.13651 9.57307 2.8197 9.78427 2.5557 10.1011C2.2389 10.5235 2.0805 11.1043 2.2389 11.6323C2.2389 11.6851 2.2389 11.6851 2.2389 11.7379L5.51253 21.6116C5.72373 22.3508 6.41014 22.8788 7.20214 22.8788H21.7751C23.7287 22.8788 25.4183 21.4004 25.6823 19.4468L27.8999 3.65942C27.8999 3.55382 28.0055 3.50102 28.1111 3.50102H30.9623C31.596 3.50102 32.1768 2.97302 32.1768 2.28661C32.1768 1.6002 31.7016 1.125 31.0679 1.125ZM20.1911 9.41467H17.023V6.24664H20.1911V9.41467ZM11.5318 4.87383H14.6998V5.56024V9.41467H11.5318V6.93305V4.87383ZM5.98773 7.61946H9.15576V9.41467H5.98773V7.61946ZM23.4119 19.0772C23.3063 19.8692 22.6199 20.45 21.8279 20.45H7.67735L4.82612 11.7907H24.4679L23.4119 19.0772Z" fill="#FAE100" />
                                            </svg>
                                        </a>
                                        <div className="price_lable">
                                            <label htmlFor="">Total:</label>
                                            <p>$25.00</p>
                                        </div>
                                        <div className="box">
                                            <a className="btn sm" href="#popup15">Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="popup15" className="overlay">
                                <div className="get_ticketp">


                                    <div className="get_ticket_over">
                                        <div className="get_ticket_overi res_none">

                                            <h1>Event Title</h1>
                                            <p className="res_yellow">Saturday, July 5, 2025 at 7:30 pm PST</p>
                                            <p>Time left: 13:19</p>
                                        </div>

                                        <div className="main_buy_form">
                                            <div className="promo_ticket pc_none">
                                                <form action="">
                                                    <label htmlFor="promo">Promo Code</label>
                                                    <div className="promo_ticket_input">
                                                        <input type="text" />
                                                        <button type="submit">Apply</button>
                                                    </div>
                                                </form>

                                            </div>
                                            <form action="" className="buy_ticket">
                                                <label htmlFor="">Billing Information</label>
                                                <div className="buy_ticket_row">
                                                    <input type="text" placeholder="First Name *" />
                                                    <input type="text" placeholder="Last Name *" />
                                                    <input type="text" placeholder="Email *" />
                                                </div>

                                                <div className="buy_ticket_row">
                                                    <input type="text" placeholder="Address Line 1 *" />
                                                    <input type="text" placeholder="Address Line 2" />
                                                    <input type="text" placeholder="City *" />
                                                </div>
                                                <div className="buy_ticket_row">
                                                    <input type="text" placeholder="State *" />
                                                    <input type="text" placeholder="Postal *" />
                                                </div>
                                                <div className="pay_opt">
                                                    <p>Payment Options</p>
                                                    <div>
                                                        <input type="radio" id="hue" name="pay_2" value="hue" checked />
                                                        <label htmlFor="hue">Apple Pay</label>
                                                    </div>

                                                    <div>
                                                        <input type="radio" id="dewe" name="pay_2" value="dewe" />
                                                        <label htmlFor="dewe">Credit/Debit Card</label>
                                                    </div>
                                                    <div className="card_info2">
                                                        <input type="text" className="card_no" placeholder="Credit/Debit Card Number" />
                                                        <input type="text" className="mm" placeholder="Exp" />
                                                        <input type="text" className="mm" placeholder="CVV" />
                                                    </div>
                                                    <p className="card_infoend">By selecting “Buy Now” I agree to Event Visionary’s Terms and Conditions</p>

                                                </div>
                                            </form>
                                        </div>
                                        <div className="promo_ticket res_none">
                                            <form action="">
                                                <label htmlFor="promo">Promo Code</label>
                                                <div className="promo_ticket_input">
                                                    <input type="text" />
                                                    <button type="submit">Apply</button>
                                                </div>
                                            </form>
                                            <div className="box">
                                                <div className="back_form">
                                                    <div className="back_btns">
                                                        <Link href="#popup14"><FaChevronLeft className="back_icon" /></Link>
                                                        <a className="" href="#popup14">Back</a>

                                                    </div>
                                                    <a className="btn" href="#popup16">Get Tickets</a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="get_ticket_cart">
                                        <a className="jclose" href="#">
                                            <RiCloseFill color="#FAE100" className="Xmarks" />

                                        </a>
                                        <a className="fclose pc_none" href="#popup14">
                                        <IoIosArrowBack />
                                        </a>
                                        <div className="get_ticket_overi pc_none">

                                            <h1>Event Title</h1>
                                            <p className="res_yellow">Saturday, July 5, 2025 at 7:30 pm PST</p>
                                            <h1>Order Summary</h1>
                                            <p className="res_m">Ticket Type Name</p>
                                        </div>
                                        <div className="get_ticket_carti res_none"></div>
                                        <div className="cart_ticker">
                                            <h2 className="res_none">Cart</h2>
                                            <div className="order_sum_text">

                                                <div className="order_summary_data">
                                                    <p className="no">x1</p>
                                                    <div className="order_tinfo">
                                                        <p className="type_name">Ticket Type Name </p>
                                                        <p className="type_id">Seat ID or Table ID or Both</p>
                                                    </div>
                                                    <div className="order_pinfo">$25.00</div>
                                                    <div className="order_trash">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                            viewBox="0 0 15 15" fill="none">
                                                            <path
                                                                d="M3.04688 15H11.9531V2.34375H12.6562V1.875H9.375V0H5.625V1.875H2.34375V2.34375H3.04688V15ZM6.09375 0.46875H8.90625V1.875H6.09375V0.46875ZM11.4844 2.34375V14.5312H3.51562V2.34375H11.4844Z"
                                                                fill="#FF0000" />
                                                            <path d="M6.32812 4.6875H5.85938V12.6562H6.32812V4.6875Z"
                                                                fill="#FF0000" />
                                                            <path d="M9.14062 4.6875H8.67188V12.6562H9.14062V4.6875Z"
                                                                fill="#FF0000" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="order_summary_data">
                                                    <p className="no">x1</p>
                                                    <div className="order_tinfo">
                                                        <p className="type_name">Ticket Type Name </p>
                                                        <p className="type_id">Seat ID or Table ID or Both</p>
                                                    </div>
                                                    <div className="order_pinfo">$25.00</div>
                                                    <div className="order_trash">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                                                            viewBox="0 0 15 15" fill="none">
                                                            <path
                                                                d="M3.04688 15H11.9531V2.34375H12.6562V1.875H9.375V0H5.625V1.875H2.34375V2.34375H3.04688V15ZM6.09375 0.46875H8.90625V1.875H6.09375V0.46875ZM11.4844 2.34375V14.5312H3.51562V2.34375H11.4844Z"
                                                                fill="#FF0000" />
                                                            <path d="M6.32812 4.6875H5.85938V12.6562H6.32812V4.6875Z"
                                                                fill="#FF0000" />
                                                            <path d="M9.14062 4.6875H8.67188V12.6562H9.14062V4.6875Z"
                                                                fill="#FF0000" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order_main_list">
                                                <div className="order_list_items">
                                                    <div className="order_list_item">
                                                        <p>Subtotal</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Taxes</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Service Fees</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                    <div className="order_list_item">
                                                        <p>Total</p>
                                                        <p>$50.00</p>
                                                    </div>
                                                </div>




                                            </div>

                                        </div>

                                    </div>
                                    <div className="single_sticky_bar2 pc_none2">
                                        <div className="sticky_inner2">
                                            <a href="./about.html">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                    <path d="M19.9266 25.4131C17.8146 25.4131 16.125 27.1027 16.125 29.2147C16.125 31.3267 17.8146 33.0164 19.9266 33.0164C22.0387 33.0164 23.7283 31.3267 23.7283 29.2147C23.7283 27.1555 21.9858 25.4131 19.9266 25.4131ZM19.9266 30.6931C19.1346 30.6931 18.501 30.0595 18.501 29.2675C18.501 28.4755 19.1346 27.8419 19.9266 27.8419C20.7186 27.8419 21.3522 28.4755 21.3522 29.2675C21.3522 30.0067 20.6658 30.6931 19.9266 30.6931Z" fill="#FAE100" />
                                                    <path d="M9.89441 25.4131C7.78239 25.4131 6.09277 27.1027 6.09277 29.2147C6.09277 31.3267 7.78239 33.0164 9.89441 33.0164C12.0064 33.0164 13.696 31.3267 13.696 29.2147C13.696 27.1555 11.9536 25.4131 9.89441 25.4131ZM9.89441 30.6931C9.1024 30.6931 8.46879 30.0595 8.46879 29.2675C8.46879 28.4755 9.1024 27.8419 9.89441 27.8419C10.6864 27.8419 11.32 28.4755 11.32 29.2675C11.32 30.0067 10.6864 30.6931 9.89441 30.6931Z" fill="#FAE100" />
                                                    <path d="M31.0679 1.125H28.2167C26.9495 1.125 25.8407 2.07541 25.6823 3.34262L24.8375 9.41467H22.6199V5.56024C22.5671 4.60983 21.8279 3.87062 20.9303 3.87062H17.023C16.8646 3.07862 16.1782 2.49781 15.3862 2.49781H10.7926C9.89496 2.49781 9.10296 3.28982 9.10296 4.29303V5.29624H5.24853C4.35092 5.29624 3.55891 6.03544 3.55891 6.88025V9.46747C3.13651 9.57307 2.8197 9.78427 2.5557 10.1011C2.2389 10.5235 2.0805 11.1043 2.2389 11.6323C2.2389 11.6851 2.2389 11.6851 2.2389 11.7379L5.51253 21.6116C5.72373 22.3508 6.41014 22.8788 7.20214 22.8788H21.7751C23.7287 22.8788 25.4183 21.4004 25.6823 19.4468L27.8999 3.65942C27.8999 3.55382 28.0055 3.50102 28.1111 3.50102H30.9623C31.596 3.50102 32.1768 2.97302 32.1768 2.28661C32.1768 1.6002 31.7016 1.125 31.0679 1.125ZM20.1911 9.41467H17.023V6.24664H20.1911V9.41467ZM11.5318 4.87383H14.6998V5.56024V9.41467H11.5318V6.93305V4.87383ZM5.98773 7.61946H9.15576V9.41467H5.98773V7.61946ZM23.4119 19.0772C23.3063 19.8692 22.6199 20.45 21.8279 20.45H7.67735L4.82612 11.7907H24.4679L23.4119 19.0772Z" fill="#FAE100" />
                                                </svg>
                                            </a>
                                            <div className="price_lable">
                                                <label htmlFor="">Total:</label>
                                                <p>$25.00</p>
                                            </div>
                                            <div className="box">
                                                <a className="btn sm" href="#popup16">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div id="popup16" className="overlay">

                                <div className="get_ticketp">


                                    <div className="get_ticket_over">
                                        <a className="jclose" href="#">
                                            <RiCloseFill color="#FAE100" className="Xmarks" />

                                        </a>
                                        <a className="fclose pc_none" href="#popup15">
                                            <i className='bx bx-chevron-left'  ></i>
                                        </a>

                                        <div className="get_ticket_overi res_m">





                                            <h1>Event Title</h1>
                                            <p className="res_yellow">Saturday, July 5, 2025 at 7:30 pm PST</p>
                                            <h1 >Order Confirmation</h1>
                                        </div>

                                        <div className="main_buy_form">

                                            <form action="" className="main_heading_Confirma">
                                                <div className="buy_ticket_row">
                                                    <p>Your order has been placed successfully.</p>
                                                </div>

                                                <div className="buy_ticket_row">
                                                    <p>Order # 001230034</p>
                                                </div>
                                                <div className="buy_ticket_row">
                                                    <p>Total Paid: $62.50</p>
                                                </div>
                                                <div className="buy_ticket_row res_none">
                                                    <p>Don’t forget to add this event to your calendar!</p>
                                                </div>
                                                <div className="order_con_flex pc_none">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="46" viewBox="0 0 45 46" fill="none">
                                                        <path d="M41.9062 19.0625C42.9609 18.9922 43.8047 18.1484 43.8047 17.0234V13.1563C43.8047 10.7656 41.9062 8.86719 39.5156 8.86719H5.55469C3.16406 8.86719 1.26562 10.7656 1.26562 13.1563V17.0938C1.26562 18.1484 2.10938 19.0625 3.16406 19.1328C5.13281 19.3438 6.60937 21.0312 6.60937 23.0703C6.60937 25.1094 5.13281 26.7969 3.16406 26.9375C2.10938 27.0078 1.26562 27.9219 1.26562 28.9766V32.8437C1.26562 35.2344 3.16406 37.1328 5.55469 37.1328H39.5156C41.9062 37.1328 43.8047 35.2344 43.8047 32.8437V28.9766C43.8047 27.9219 42.9609 27.0078 41.9062 26.9375C39.9375 26.7266 38.4609 25.0391 38.4609 23C38.4609 20.8906 39.9375 19.2031 41.9062 19.0625ZM40.6406 29.8906V32.8437C40.6406 33.4766 40.1484 33.9687 39.5156 33.9687H22.2891V30.1719C22.2891 29.3281 21.5859 28.5547 20.6719 28.5547C19.7578 28.5547 19.0547 29.2578 19.0547 30.1719V33.9687H5.55469C4.92188 33.9687 4.42969 33.4766 4.42969 32.8437V30.0312C7.52344 29.3281 9.77344 26.5156 9.77344 23.1406C9.77344 19.8359 7.52344 16.9531 4.42969 16.1797V13.1563C4.42969 12.5234 4.92188 12.0312 5.55469 12.0312H19.125V15.8281C19.125 16.6719 19.8281 17.4453 20.7422 17.4453C21.6562 17.4453 22.3594 16.7422 22.3594 15.8281V12.0312H39.5156C40.1484 12.0312 40.6406 12.5234 40.6406 13.1563V16.0391C37.5469 16.8125 35.2969 19.625 35.2969 23C35.2969 26.3047 37.5469 29.1172 40.6406 29.8906Z" fill="#FAE100" />
                                                        <path d="M20.7422 19.625C19.8984 19.625 19.125 20.3281 19.125 21.2422V24.8281C19.125 25.6719 19.8281 26.4453 20.7422 26.4453C21.6562 26.4453 22.3594 25.7422 22.3594 24.8281V21.2422C22.2891 20.3281 21.5859 19.625 20.7422 19.625Z" fill="#FAE100" />
                                                    </svg>
                                                    <p>Your e-tickets have been emailed to you but can also be viewed and printed here:
                                                        [ insert link to generated pdf ]</p>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="share_g res_none">
                                            <p>Share this event</p>
                                            <a className="share_btn" href="#popup17" >
                                                {/* <BsShare className="share_btn" /> */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M18.5 8C20.1569 8 21.5 6.65685 21.5 5C21.5 3.34315 20.1569 2 18.5 2C16.8431 2 15.5 3.34315 15.5 5C15.5 6.65685 16.8431 8 18.5 8Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M6.5 15C8.15685 15 9.5 13.6569 9.5 12C9.5 10.3431 8.15685 9 6.5 9C4.84315 9 3.5 10.3431 3.5 12C3.5 13.6569 4.84315 15 6.5 15Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M18.5 22C20.1569 22 21.5 20.6569 21.5 19C21.5 17.3431 20.1569 16 18.5 16C16.8431 16 15.5 17.3431 15.5 19C15.5 20.6569 16.8431 22 18.5 22Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.08984 13.5098L15.9198 17.4898" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M15.9098 6.50977L9.08984 10.4898" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </a>
                                        </div>
                                        <div className="logo_form res_none">
                                            <p>Powered by Event Visionary. </p>
                                            {/* <img src="./imgs/4736150369408c50504a5b1df6f6db67.png" alt=""/> */}
                                            <Image src={Mine_logo} alt='' className='popup_logo' />
                                        </div>

                                    </div>

                                    <div className="get_ticket_cart res_none">

                                        <div className="get_ticket_carti"></div>
                                        <div className="cart_btns">
                                            <a href="" className="btn">Browse More Events</a>
                                        </div>

                                    </div>

                                </div>
                                <div className="single_sticky_bar2 res_tm pc_none">
                                    <div className="sticky_inner2">
                                        <a href="./eventpage.html">

                                            <p className="res_yellow">Browse More Events <br />
                                                by this Organizer</p>
                                        </a>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                                            <path d="M16.7347 43.8046C15.891 43.8046 15.1175 43.453 14.555 42.8202C13.5004 41.6249 13.8519 40.2186 13.9925 39.5858L17.7191 23.6249H10.4769C9.98473 23.6249 9.00036 23.6249 8.15661 22.9921C6.75036 21.8671 7.17223 19.9686 7.24254 19.3358L10.1957 4.92175C10.3363 4.14831 10.6175 2.953 11.6722 2.10925C12.8675 1.19519 14.0629 1.19519 14.766 1.2655H24.3988C25.2425 1.2655 27.0004 1.2655 28.055 2.60144C29.1097 3.93738 28.7582 5.69519 28.6175 6.53894L27.7738 10.5468L33.9613 10.6171C36.4222 10.6171 37.3363 11.7421 37.6175 12.6561C38.1097 14.0624 37.266 15.328 36.9144 15.8202L19.6879 41.7655C19.3363 42.2577 18.8441 43.0311 17.93 43.5233C17.5785 43.6639 17.2269 43.8046 16.8754 43.8046C16.8754 43.7342 16.805 43.8046 16.7347 43.8046ZM10.4066 20.3905C10.4769 20.3905 10.5472 20.3905 10.5472 20.3905H19.7582C20.2504 20.3905 20.6722 20.6014 21.0238 21.0233C21.305 21.3749 21.4457 21.8671 21.305 22.3593L17.2269 39.7967L34.2425 14.0624C34.3129 13.9921 34.3832 13.8514 34.3832 13.7811C34.2425 13.7811 34.1019 13.7811 33.8207 13.7811L25.7347 13.7108C25.2425 13.7108 24.8207 13.4999 24.5394 13.1483C24.2582 12.7968 24.1175 12.3046 24.2582 11.8124L25.5238 5.83581C25.7347 4.85144 25.6644 4.6405 25.5941 4.57019C25.5238 4.49988 25.3129 4.42956 24.3285 4.42956H14.766C14.2035 4.42956 13.8519 4.42956 13.7816 4.49988C13.7113 4.57019 13.5707 4.92175 13.43 5.48425L10.4769 19.8983C10.4769 20.1093 10.4066 20.2499 10.4066 20.3905Z" fill="#FAE100" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div id="popup17" className="overlay">
                                <div className="popupmain">



                                    <div className="order_done">
                                        <a className="jclose" href="#">
                                            <RiCloseFill />

                                        </a>
                                        <p>Share this event with friends</p>
                                        <div className="copy_links">
                                            <input type="text" disabled placeholder='sefwfnwefbwuiub' />
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                <path d="M20.5 9H11.5C10.3954 9 9.5 9.89543 9.5 11V20C9.5 21.1046 10.3954 22 11.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V11C22.5 9.89543 21.6046 9 20.5 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M5.5 15H4.5C3.96957 15 3.46086 14.7893 3.08579 14.4142C2.71071 14.0391 2.5 13.5304 2.5 13V4C2.5 3.46957 2.71071 2.96086 3.08579 2.58579C3.46086 2.21071 3.96957 2 4.5 2H13.5C14.0304 2 14.5391 2.21071 14.9142 2.58579C15.2893 2.96086 15.5 3.46957 15.5 4V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="sharep_icons">
                                            <a href="https://www.facebook.com/" target="_blank">

                                                <FaFacebookF className="share_i" />
                                            </a>
                                            <a href="https://twitter.com/home" target="_blank">
                                                <i className='bx bxl-twitter' ></i>
                                                <FaTwitter className="share_i" />

                                            </a>
                                            <a href="https://www.linkedin.com/" target="_blank">

                                                <i className='bx bxl-linkedin' ></i>
                                                <FaLinkedin className="share_i" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="samll_container">

                                </div>
                            </div>

                        </div>
                        <div className="single_event_share">
                            <p>Share this event</p>
                            <a className="" href="#popup18">

                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                    <path d="M18.5 8C20.1569 8 21.5 6.65685 21.5 5C21.5 3.34315 20.1569 2 18.5 2C16.8431 2 15.5 3.34315 15.5 5C15.5 6.65685 16.8431 8 18.5 8Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.5 15C8.15685 15 9.5 13.6569 9.5 12C9.5 10.3431 8.15685 9 6.5 9C4.84315 9 3.5 10.3431 3.5 12C3.5 13.6569 4.84315 15 6.5 15Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.5 22C20.1569 22 21.5 20.6569 21.5 19C21.5 17.3431 20.1569 16 18.5 16C16.8431 16 15.5 17.3431 15.5 19C15.5 20.6569 16.8431 22 18.5 22Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.08984 13.5098L15.9198 17.4898" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.9098 6.50977L9.08984 10.4898" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </div>
                        <div id="popup18" className="overlay">
                            <div className="popupmain">



                                <div className="order_done">
                                    <a className="jclose" href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15 9L9 15" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M9 9L15 15" stroke="#FAE100" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>

                                    </a>
                                    <p>Share this event with friends</p>
                                    <div className="copy_links">
                                        <input type="text" disabled placeholder="https://www.domain.com/878ysdf" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M20.5 9H11.5C10.3954 9 9.5 9.89543 9.5 11V20C9.5 21.1046 10.3954 22 11.5 22H20.5C21.6046 22 22.5 21.1046 22.5 20V11C22.5 9.89543 21.6046 9 20.5 9Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M5.5 15H4.5C3.96957 15 3.46086 14.7893 3.08579 14.4142C2.71071 14.0391 2.5 13.5304 2.5 13V4C2.5 3.46957 2.71071 2.96086 3.08579 2.58579C3.46086 2.21071 3.96957 2 4.5 2H13.5C14.0304 2 14.5391 2.21071 14.9142 2.58579C15.2893 2.96086 15.5 3.46957 15.5 4V5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className="sharep_icons">
                                        <a href="https://www.facebook.com/" target="_blank">

                                            <FaFacebookF className="share_i" />
                                        </a>
                                        <a href="https://twitter.com/home" target="_blank">
                                            <i className='bx bxl-twitter' ></i>
                                            <FaTwitter className="share_i" />

                                        </a>
                                        <a href="https://www.linkedin.com/" target="_blank">

                                            <i className='bx bxl-linkedin' ></i>
                                            <FaLinkedin className="share_i" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="samll_container">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="single_sticky_bar pc_none2">
        <div className="sticky_inner">
            <p><span>$70</span> - <span></span>$90</p>
            <div className="box">
                <a className="btn sm" href="#popup14">Get Tickets</a>
            </div>
        </div>
    </div>
        

        </>
        
    )
}

export default SingleEvent
