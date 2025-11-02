
import image1 from "./images/image1.png" 
import logo from "./images/logo.png"

export default function App() {
  return (
    <div className="relative mx-auto w-[1440px] h-[2903px] opacity-100 bg-white">

      <div 
      className="absolute w-[852px] h-[755px] rounded-[32px] opacity-100 bg-[#E7EAF0] flex"
      style = {{ top: "30px", left: "20px", transform: "rotate(0deg)"}}
      >

      <div  className="absolute opacity-100"
        style={{
          top: "62px",
          left: "65px",
          width: "100px",
          height: "40px",
          opacity: 1,
          transform: "rotate(0deg)"
        }}>

          <img
            src={logo}
            className="object-contain w-full h-full"
          />
    </div>

    <div
      className="absolute font-montserrat"
      style={{
        top: "70px",
        left: "274px",
        width: "186px",
        height: "20px",
        opacity: 1,
        transform: "rotate(0deg)",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        fontVariant: "small-caps",
        fontSize: "16px",
        lineHeight: "20px", // 100% of 20px
        verticalAlign: "middle",
        letterSpacing: "0%",
      }}
      >
        Наши проекты 
      </div>
      
      <div
      className="absolute font-montserrat"
      style={{
        top: "70px",
        left: "469px",
        width: "209px",
        height: "20px",
        opacity: 1,
        transform: "rotate(0deg)",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        fontVariant: "small-caps",
        fontSize: "16px",
        lineHeight: "20px",
        verticalAlign: "middle",
        letterSpacing: "0%",
      }}
    >
        Способ оплаты 
      </div>

      <div
      className="absolute font-montserrat" 
      style={{
        top: "70px",
        left: "687px",
        width: "186px",
        height: "20px",
        opacity: 1,
        transform: "rotate(0deg)",
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: 600,
        fontVariant: "small-caps",
        fontSize: "16px",
        lineHeight: "20px", // 100% of 20px
        verticalAlign: "middle",
        letterSpacing: "0%",
      }}
      >
        Контакты
      </div>


    <div
    className="absolute top-[175px] left-[65px] w-[787px] h-[118px] font-montserrat font-semibold text-[48px] leading-[118px] uppercase opacity-100"
    >
    Готовый каркасный дом от 100м2 под ключ за 2 месяца
    </div>

    <div
    className="absolute top-[175px] left-[65px] w-[787px] h-[118px] font-montserrat font-semibold text-[48px] leading-[118px] uppercase opacity-100"
    >
    Готовый каркасный дом от 100м2 под ключ за 2 месяца
    </div>

    <div
    className="absolute top-[311px] left-[65px] w-[1025px] h-[58px] font-montserrat font-normal text-[24px] leading-[58px] uppercase opacity-100"
    >
    Построим продуманный и экологичный дом с повышенной теплолэффективностью для вашей комфортной жизни
    </div>

    



    </div>

      <div  className="absolute opacity-100"
        style={{
          top: "30px",
          left: "892px",
          width: "528px",
          height: "755px",
          borderRadius: "32px",
          overflow: "hidden",
          transform: "rotate(0deg)",
        }}>

          <img
            src={image1}
            className="object-cover w-full h-full rounded-[32px]"
          />

    </div>


  </div>
  )
}


