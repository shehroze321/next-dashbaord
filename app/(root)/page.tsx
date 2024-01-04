'use client'
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import { Des_1, Des_2, Des_3, Ellispse, Hero_img, Landingmain } from '../../public'
import Link from 'next/link'
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import useScrollAnimation from '@/Hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCards from '@/components/ServiceCards/ServiceCards';
import useScrollRotate from '@/Hooks/useScrollRotate';
import SilderImages from '@/components/SilderImages/SilderImages';



export default function Home() {


  const rotation = useScrollRotate();


  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <main>


      <section className='main_header_section' >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header_section"
        >
            <h1 >Event. Planning. <br /> Genius.</h1>
            <div className="header_box">
              <div className="header_info">
                <p >Create an account for FREE </p>
                <div>
                  <Link href="/Sign_Up" className="btn" >Sign Up</Link>
                </div>
                <div className="header_text" >
                  <p className="yellow_cr">We’re the All-in-One Platform you’ve been waiting for.</p>
                  <p className="mb">Plus. No monthly or annual fees. </p>
                </div>
              </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            animation: 'scale-up-tl 1s forwards',
          }}
          className='Hero_imgs'
        >
          <div className="wapper_Hero_imgs">

            <Image src={Landingmain} alt='' className='Hero_img' />

            <Image src={Ellispse} alt="" className='back_hero_img' style={{ transform: `rotate(${rotation}deg)` }} />
          </div>
        </motion.div>

      </section>


      <div className='main_container'>
        <motion.div
          ref={ref1}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView1 ? 1 : 0, scale: inView1 ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          style={{
            animation: inView1 ? 'none' : 'scaleUpLeft 0.5s forwards',
          }}
        >

          <div className={`service_cards_section`}>

            <h1>Do more. On One Platform</h1>
            <ServiceCards />
          </div>
        </motion.div>

        <div className="show_section">
          <div className="mid_effect"></div>
          <div className="show_container">
            
                <SilderImages/>



            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 100 }}  // Starts off screen to the left
              animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 100 }}  // Slide in when in view
              transition={{ duration: 0.5 }}
            >
            <div className="show_info" >
              <h2 className='res_none'>Create your events with ease.</h2>
              <p>Need reserved seating for <br />your event? Not a <br />problem.</p>
              <p>Use our built-in designer to <br /> customize your seating chart and  <br /> allow customers to select their<br />seats at checkout</p>
            </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref3}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: inView3 ? 1 : 0, scale: inView3 ? 1 : 0.5 }}
          transition={{ duration: 0.5 }}
          style={{
            animation: inView3 ? 'none' : 'scaleUpLeft 0.5s forwards',
          }}
        >

        <div className="table_section">
          <div className="table_container" >
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Event Visionary</th>
                  <th className="tc">Eventbrite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Create and List Events</td>

                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                </tr>
                <tr>
                  <td>Sell Tickets</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                </tr>
                <tr>
                  <td>Run SMS Campaigns</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaXmark className="small_icon red" /></td>
                </tr>
                <tr>
                  <td>Easily create custom dynamic seating charts</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaXmark className="small_icon red" /></td>
                </tr>
                <tr>
                  <td>Manage Orders</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                </tr>
                <tr>
                  <td>Manage Attendees</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                </tr>
                <tr>
                  <td>We Pledge Not to Cancel Your Events</td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                  <td className="tc"><FaCheck className="small_icon green" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        </motion.div>






      </div>

    </main>
  )
}
