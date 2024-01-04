import { Rectangle } from '@/public'
import Image from 'next/image'
import React from 'react'

const EventsCard = () => {
    return (
        <div className="event_card">
            <Image src={Rectangle} alt='' className='event_card_img' width={270} height={270}/>
            <div className="card_info">
                <p>Event Title</p>
                <p>Sat, July 15, 2025 • 7:30 PM</p>
                <p>Venue Name</p>
                <a href="./singleevent.html" className="btn sm">Get tickets</a>
            </div>
        </div>
    )
}

export default EventsCard
