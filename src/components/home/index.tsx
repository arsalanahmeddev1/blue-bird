import React from 'react'
import Herosection from './Herosection';
import Bookingform from './bookingform';
import About from './about';
import ServiceSection from './servicesection';
import Whybluebird from './Whybluebird';
import Tabsecion from './tabsecion';
import Trustedsection from './trustedsection';
import Bythenumber from './bythenumber';
import Bannersection from './bannersection';
import Bannerbottom from './bannerbottom';
import Deliverysection from './deliverysection';
import Shipmetsection from './shipmetsection';

const HomeComponents = () => {
  return (
    <main>
        <Herosection />
        <Bookingform />
        <About />
        <ServiceSection />
        <Whybluebird />
        <Tabsecion />
        <Trustedsection />
        <Bythenumber />
        <Bannersection />
        <Bannerbottom />
        <Deliverysection />
        <Shipmetsection />
    </main>
  )
}

export default HomeComponents;