import Omnipro from '../assets/Omnipro_Logo.jpg'

import useWindowDimensions from '../hooks/use-window-dimensions'

const CompanyList = () => {
    const { width, hieght } = useWindowDimensions()

    const companies = [
        {
            href: '#',
            logo: Omnipro,
            alt: 'Omnipro logo'
        }
    ]
    return (
        <>
            {width > 768 ? (
                <div className="py-6 px-[100px] text-center w-[700px] mx-auto bg-[#17191A] rounded-2xl">
                    <p className="text-[16px] font-semibold pb-5">Companies I have worked for</p>
                    <div className="place-content-center">
                        {companies.map((value, index) => {
                            return (
                                <a href={value.href} key={index} className='m-2 inline-block hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)]'>
                                    <img className='w-[150px]' src={value.logo} alt={value.alt} />
                                </a>
                            )
                        })
                        }
                    </div>
                </div>
            ) : (
                <div className="py-6 text-center px-10 mx-10 bg-[#17191A] rounded-2xl">
                    <p className="text-[16px] font-semibold pb-5">Companies I have worked for</p>
                    <div className="place-content-center">
                        {companies.map((value, index) => {
                            return (
                                <a href={value.href} key={index} className='hover:shadow-[0_0px_20px_0px_rgba(248,6,204,0.5)] inline-block m-2'>
                                    <img className='w-[100px]' src={value.logo} alt={value.alt} />
                                </a>
                            )
                        })
                        }
                    </div>
                </div>
            )
            }
        </>
    )
}

export default CompanyList;