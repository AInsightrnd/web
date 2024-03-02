import { useId } from 'react'

import { Container } from '@/components/Container'
import Image from 'next/image'
import ceoImage from '@/images/company/ceo-ahn.png'

const histories = [
  {
    name: '2023 June (6/30)',
    description:
      `AICiTi program version 7.7 출시`,
      icon: DeviceClockIcon,
  },
  {
    name: '2023 April (4/25)',
    description:
      `산자부 주관 중견 중소 기업 상생형 혁신 도약 사업 과제 선정
      (주관기업 – 바텍사, 총 사업비 – 39억, 
      주식회사 아인사이트 – 6억)`,
    icon: DeviceArrowIcon,
  },
  {
    name: '2023 March (3/23)',
    description:
      `자연 두부 위치에서 촬영된 엑스레이(X-ray) 이미지를 이용한 기계학습 기반 치아 교정 진단을 위한 
      두부계측 파라미터 도출방법 – 국내 출원 완료`,
      icon: DeviceLockIcon,
  },
  {
    name: '2022 September (9/8)',
    description:
      `Computer Methods and Programs in Biomedicine에 “Automated analysis of three-dimensional CBCT
      images taken in natural head position that combinesfacial profile processing and multiple deep-learning models” 프로그램 검증 논문 게재.`,
    icon: DeviceCardsIcon,
  },
  {
    name: '2022 April (4/29)',
    description:
      `자연 두부 위치에서 촬영된 3차원 CBCT 영상에서 기계 학습 기반 치아교정 진단을 위한 
      두부 계측 파라미터 도출방법 – PCT 출원 완료`,
      icon: DeviceLockIcon,
  },
  {
    name: '2022 March (3/5)',
    description:
      `자연 두부 위치에서 촬영된 3차원 CBCT 영상에서 기계  학습 기반  치아교정 진단을 위한 
      두부 계측 파라미터 도출방법 – 국내 특허 등록 완료`,
      icon: DeviceLockIcon,
  },
  {
    name: '2021 September (9/10)',
    description:
      'AICiTi program version 4.1 출시',
      icon: DeviceClockIcon,
  },
  {
    name: '2021 April (4/5)',
    description:
      '회사 창립',
    icon: DeviceChartIcon,
  },
]

function DeviceArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        d="M12 25l8-8m0 0h-6m6 0v6"
        stroke="#171717"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceCardsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
        fill={`url(#${id}-gradient)`}
      />
      <rect x={9} y={6} width={14} height={4} rx={1} fill="#171717" />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={16}
          y1={12}
          x2={16}
          y2={28}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#737373" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  )
}

function DeviceClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceListIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <circle cx={11} cy={14} r={2} fill="#171717" />
      <circle cx={11} cy={20} r={2} fill="#171717" />
      <circle cx={11} cy={26} r={2} fill="#171717" />
      <path
        d="M16 14h6M16 20h6M16 26h6"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

function DeviceLockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
        fill="#171717"
      />
    </svg>
  )
}

function DeviceChartIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
        fill="#171717"
      />
      <path
        d="M10 12h12"
        stroke="#737373"
        strokeWidth={2}
        strokeLinecap="square"
      />
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
    </svg>
  )
}

export function CeoMessage() {
  return (
    <section
      id="ceo-message"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32 bg-ainbg-secondary"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-50">
            We are changing the way people smile
          </h2>
          <p className="mt-2 text-lg text-gray-200">
            Ainsight is an artificial intelligence orthodontic correction program designed to make data,
            based on information accessible to everyone,
            easily understandable for both professionals and the general public.
            With image interpretation times reduced to less than 10 seconds,
            we are revolutionizing the clinical process by significantly shortening the time required for orthodontic assessments.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="relative mt-10 mx-auto grid max-w-2xl lg:max-w-none lg:pt-6 sm:mt-20 lg:col-span-6 lg:row-span-2 lg:mt-0 xl:col-span-7">
            <p className="mt-2 text-gray-200">
              Hello,<br />
              This is Jang Hoon Ahn, the CEO of AInsightCorporation.
              I am delighted to have the opportunity to introduce our company to you.
              Our company provides dental and medical software to clinicians. <br />
              In particular, we offer a program that automatically analyzes two-dimensional x-ray, three-dimensional CBCT images,
              and intraoral scan data that orthodontists and dental practitioners commonly take when treating orthodontic patients.<br />
              Manually analyzing two-dimensional cephalograms, three-dimensional CBCT images, or intraoral scan data requires
              a significant amount of time and effort.<br />
              Therefore, by utilizing artificial intelligence-based programs, we can automatically analyze these data,
              enabling efficient diagnosis and treatment planning for orthodontic patients in a short period of time
              We are also developing an automatic teeth alignment program that considers roots and skeletal structures,
              which can be used for orthodontic treatment simulations or the production of clear aligners.<br />
              Additionally, we plan to provide automated three-dimensional simulation programs and surgical guides for orthognathic surgery.<br />
              Furthermore, we are also planning the development of technology for automated diagnosis for implant surgery. Voice charting is another
              item in our AI software lineup which we believe could be helpful for general doctors, not only for dentists.
              As a dentist and orthodontic specialist myself, I understand the challenges and hard work that you face in clinical practice.
              At our company, we continuously develop excellent dental and medical software to alleviate your hard work even just a little.<br />
              I sincerely wish you and your families good luck and good health.<br />
              Thank you
            </p>
          </div>
          <div className="relative z-10 mx-auto pt-6 max-w-2xl lg:col-span-6 lg:max-w-none xl:col-span-5">
            <Image
              className="h-auto"
              src={ceoImage}
              alt={""}
            />
            <h3 className="mt-6 font-semibold text-gray-200 text-center">
              Ahn Jang-hoon, CEO
            </h3>
          </div>
        </div>

        {/* <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-2"
        >
          <li
            key='ceo'
            className="rounded-2xl border-left border-gray-200 p-8"
          >
            <Image
              className="h-auto"
              src={ceoImage}
              alt={""}
            />
            <h3 className="mt-6 font-semibold text-gray-800 text-center">
              Ahn Jang-hoon, CEO
            </h3>
          </li>
          <li
            key='message'
            className="rounded-2xl border-left border-gray-200 p-8"
          >
            <p className="mt-2 text-gray-700">
              Hello,<br />
              This is Jang Hoon Ahn, the CEO of AInsightCorporation.
              I am delighted to have the opportunity to introduce our company to you.
              Our company provides dental and medical software to clinicians. <br />
              In particular, we offer a program that automatically analyzes two-dimensional x-ray, three-dimensional CBCT images,
              and intraoral scan data that orthodontists and dental practitioners commonly take when treating orthodontic patients.<br />
              Manually analyzing two-dimensional cephalograms, three-dimensional CBCT images, or intraoral scan data requires
              a significant amount of time and effort.<br />
              Therefore, by utilizing artificial intelligence-based programs, we can automatically analyze these data,
              enabling efficient diagnosis and treatment planning for orthodontic patients in a short period of time
              We are also developing an automatic teeth alignment program that considers roots and skeletal structures,
              which can be used for orthodontic treatment simulations or the production of clear aligners.<br />
              Additionally, we plan to provide automated three-dimensional simulation programs and surgical guides for orthognathic surgery.<br />
              Furthermore, we are also planning the development of technology for automated diagnosis for implant surgery. Voice charting is another
              item in our AI software lineup which we believe could be helpful for general doctors, not only for dentists.
              As a dentist and orthodontic specialist myself, I understand the challenges and hard work that you face in clinical practice.
              At our company, we continuously develop excellent dental and medical software to alleviate your hard work even just a little.<br />
              I sincerely wish you and your families good luck and good health.<br />
              Thank you
            </p>
          </li>
        </ul> */}

        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {histories.map((history) => (
            <li
              key={history.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <history.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-gray-50">
                {history.name}
              </h3>
              <p className="mt-2 text-gray-200">{history.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
