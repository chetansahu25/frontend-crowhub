import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#06000E] relative">
      {/* Navigation */}
      <nav className="w-full max-w-[1186px] h-[52px] mx-auto pt-9 px-12 flex items-center justify-between relative">
        <div className="flex items-end gap-[15px]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/24791440490dbe36bd92d13f7b6b71898a6377b2?width=88"
            alt="Crowhub Logo"
            width={44}
            height={43}
          />
        </div>
        
        <div className="flex items-center gap-7">
          <div className="flex items-center justify-center h-10 px-0 rounded-[48px]">
            <span className="text-white font-inter-tight text-base font-normal leading-[140%]">Home</span>
          </div>
          <div className="flex items-center justify-center h-[46px] px-0 rounded-[48px]">
            <span className="text-[rgba(196,196,196,0.65)] font-inter-tight text-base font-normal leading-[140%]">Projects</span>
          </div>
          <div className="flex items-center justify-center h-[46px] px-0 rounded-[48px]">
            <span className="text-[rgba(196,196,196,0.65)] font-inter-tight text-base font-normal leading-[140%]">About</span>
          </div>
          <div className="flex items-center justify-center h-[46px] px-0 rounded-[48px]">
            <span className="text-[rgba(196,196,196,0.65)] font-inter-tight text-base font-normal leading-[140%]">Contact</span>
          </div>
        </div>

        <div className="w-[112px] h-[52px] rounded-[100px] relative shadow-[1px_3px_6px_0_#000,-1px_-1px_1px_0_rgba(0,0,0,0.40)_inset,1px_1px_1px_0_rgba(255,255,255,0.40)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,1px_1px_5px_0_rgba(255,255,255,0.60)_inset]">
          <div className="absolute inset-0 rounded-[100px] backdrop-blur-[0.5px]" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.05) 0%, rgba(72, 69, 254, 0.05) 100%)' }}></div>
          <div className="absolute left-5 top-3.5 flex items-center gap-2.5">
            <span className="text-white font-inter-tight text-base font-semibold leading-[150%] tracking-[0.32px]">Login</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.125 10H16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </nav>

      {/* Decorative Dots */}
      <div className="absolute left-[931px] top-[259px] w-[3px] h-[3px] rounded-full bg-[#ECD6FF] glow-dot"></div>
      <div className="absolute left-[213px] top-[651px] w-[9px] h-[9px] rounded-full bg-[#ECD6FF] glow-dot"></div>
      <div className="absolute left-[197px] top-[470px] w-[9px] h-[9px] rounded-full bg-[#ECD6FF] glow-dot-purple"></div>
      <div className="absolute left-[337px] top-[310px] w-[5px] h-[5px] rounded-full bg-[#ECD6FF] glow-dot"></div>
      <div className="absolute left-[1180px] top-[700px] w-[9px] h-[9px] rounded-full bg-[#ECD6FF] glow-dot"></div>

      {/* Hero Section */}
      <section className="w-full max-w-[1280px] mx-auto px-12 pt-24 relative">
        <div className="flex flex-col items-center gap-2 mb-12">
          <div className="flex items-center px-[15px] py-1.5 rounded-[32px] backdrop-blur-[3px] shadow-[0_-7px_11px_0_rgba(164,143,255,0.12)_inset] mb-6" style={{ background: 'rgba(255, 255, 255, 0.00)' }}>
            <span className="gradient-text-badge font-inter text-sm font-medium leading-5">The Dating App — for Builders, Not Dates.</span>
          </div>
          
          <h1 className="w-[823px] text-center font-inter text-[79px] font-bold leading-[108%] tracking-[-0.79px]">
            <span className="gradient-text-purple">Swipe Right on Your Next Connect.</span>
          </h1>
          
          <div className="flex items-center gap-2 mt-2">
            <span className="text-white font-cabin text-[33px] font-normal leading-[119%]">and may be</span>
            <span className="gradient-text-purple-reverse font-cookie text-[43px] font-normal leading-[119%]" style={{ WebkitTextStroke: '0.21px #000' }}>Newmatch.</span>
          </div>
        </div>

        <div className="relative w-full flex justify-center">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/332ee15814ce4158b472ae325b6c50f5dd1828cc?width=2469"
            alt="Hero Image"
            width={1235}
            height={823}
            className="rounded-lg"
          />
          
          <button className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 w-[305px] h-[63px] rounded-[100px] backdrop-blur-[3px] shadow-[0_4px_11.7px_0_rgba(0,0,0,0.25),-1px_-1px_1px_0_rgba(0,0,0,0.40)_inset,1px_1px_1px_0_rgba(255,255,255,0.40)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,1px_1px_5px_0_rgba(255,255,255,0.60)_inset] flex items-center justify-center">
            <span className="text-white font-inter text-xl font-semibold leading-normal">Find your Connection</span>
          </button>
        </div>

        {/* Tag Icons */}
        <div className="absolute left-[213px] top-[631px] w-[111px] h-[50px]">
          <svg width="111" height="50" viewBox="0 0 111 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M107.071 15H20.6283C18.4583 15 16.6991 16.7909 16.6991 19V46C16.6991 48.2091 18.4583 50 20.6283 50H107.071C109.241 50 111 48.2091 111 46V19C111 16.7909 109.241 15 107.071 15Z" fill="#DA6821"/>
            <text fill="black" x="34" y="37" fontFamily="Cabin" fontSize="16" fontWeight="600">Products</text>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.26378 1.28655C1.53912 1.00626 1.95339 0.922819 2.31283 1.07526L15.1255 6.50939C15.4944 6.6659 15.7297 7.03862 15.7162 7.44534C15.7028 7.85207 15.4434 8.20783 15.0649 8.33871L9.93391 10.1129L8.19112 15.3363C8.06256 15.7217 7.71309 15.9857 7.31356 15.9994C6.91404 16.0131 6.54792 15.7736 6.39418 15.398L1.05623 2.3545C0.906484 1.98859 0.98845 1.56685 1.26378 1.28655Z" fill="#DA6821" stroke="#743209" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="absolute left-[192px] top-[409px] w-[118px] h-[50px]">
          <svg width="118" height="50" viewBox="0 0 118 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.6207 15H4.06897C1.82174 15 0 16.7909 0 19V46C0 48.2091 1.82174 50 4.06897 50H95.6207C97.8679 50 99.6897 48.2091 99.6897 46V19C99.6897 16.7909 97.8679 15 95.6207 15Z" fill="#6243D1"/>
            <text fill="white" x="7" y="37" fontFamily="Cabin" fontSize="20" fontWeight="600">Recruiters</text>
            <path fillRule="evenodd" clipRule="evenodd" d="M116.691 1.28655C116.406 1.00626 115.977 0.922819 115.604 1.07526L102.337 6.50939C101.954 6.6659 101.711 7.03862 101.725 7.44534C101.738 7.85207 102.007 8.20783 102.4 8.33871L107.713 10.1129L109.517 15.3363C109.651 15.7217 110.013 15.9857 110.427 15.9994C110.84 16.0131 111.219 15.7736 111.379 15.398L116.907 2.3545C117.061 1.98859 116.977 1.56685 116.691 1.28655Z" fill="#6243D1" stroke="#9C88E2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="absolute left-[998px] top-[347px] w-[111px] h-[50px]">
          <svg width="111" height="50" viewBox="0 0 111 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M107.071 15H20.6284C18.4584 15 16.6992 16.7909 16.6992 19V46C16.6992 48.2091 18.4584 50 20.6284 50H107.071C109.241 50 111 48.2091 111 46V19C111 16.7909 109.241 15 107.071 15Z" fill="#FBDA65"/>
            <text fill="black" x="31.6719" y="37" fontFamily="Cabin" fontSize="16" fontWeight="600">Designers</text>
            <path fillRule="evenodd" clipRule="evenodd" d="M1.2639 1.28655C1.53924 1.00626 1.95352 0.922819 2.31295 1.07526L15.1256 6.50939C15.4945 6.6659 15.7298 7.03862 15.7163 7.44534C15.7029 7.85207 15.4436 8.20783 15.065 8.33871L9.93403 10.1129L8.19124 15.3363C8.06268 15.7217 7.71322 15.9857 7.31369 15.9994C6.91416 16.0131 6.54804 15.7736 6.3943 15.398L1.05635 2.3545C0.906606 1.98859 0.988572 1.56685 1.2639 1.28655Z" fill="#FBDA65" stroke="#D0AD2E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/91ea1357e27f51f682e454d60f3a6ee269945dc3?width=272"
          alt="Icon"
          width={136}
          height={50}
          className="absolute left-[872px] top-[610px]"
        />
      </section>

      {/* About Section */}
      <section className="w-full max-w-[1160px] mx-auto px-12 py-24 mt-32">
        <div className="flex flex-col gap-20">
          <div className="relative">
            <h2 className="text-white font-cabin text-[50px] font-semibold leading-[66px]">
              Crowhub is a collaboration-first platform where developers,{' '}
              <span className="text-white/[0.14]">
                designers, product minds, and tech founders connect to build real things—startups, side projects, and open-source breakthroughs.
              </span>
            </h2>
          </div>

          <div className="flex justify-between gap-8">
            <p className="w-[378px] text-[#A9A7B6] font-cabin text-xl font-normal leading-[30px]">
              Whether you're solo with an MVP or part of a team missing that final piece, Crowhub helps you find your next product match.
            </p>
            <p className="w-[378px] text-[#A9A7B6] font-cabin text-xl font-normal leading-[30px]">
              We connect people not for social likes, but for startup launches, side projects, and open-source breakthroughs.
            </p>
          </div>

          <div className="w-[114px] h-[114px] rounded-[100px] shadow-[1px_3px_6px_0_#000,-1px_-1px_1px_0_rgba(0,0,0,0.40)_inset,1px_1px_1px_0_rgba(255,255,255,0.40)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,1px_1px_5px_0_rgba(255,255,255,0.60)_inset] flex items-center justify-center backdrop-blur-[0.5px]" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.05) 0%, rgba(72, 69, 254, 0.05) 100%)' }}>
            <span className="text-white font-cabin text-2xl font-medium">Scroll</span>
          </div>
        </div>
      </section>

      {/* Built for Builders Section */}
      <section className="w-full max-w-[1256px] mx-auto px-12 py-24">
        <div className="flex flex-col items-center gap-3 mb-12">
          <div className="flex items-center px-[15px] py-1.5 rounded-[32px] backdrop-blur-[3px] shadow-[0_-7px_11px_0_rgba(164,143,255,0.12)_inset]" style={{ background: 'rgba(255, 255, 255, 0.00)' }}>
            <span className="gradient-text-badge font-inter text-sm font-medium leading-5">The Dating App — for Builders, Not Dates.</span>
          </div>
          
          <h2 className="text-center font-cabin text-[56px] font-semibold leading-[64px] gradient-text-white">
            Built for Builders. Tuned for Team-ups.
          </h2>
          
          <p className="w-[804px] text-center text-[rgba(239,237,253,0.70)] font-inter text-base font-normal leading-6">
            From first match to final launch, Crowhub gives creators everything they need to connect, collaborate, and create something real.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-16">
          {/* Feature Card 1 */}
          <div className="p-8 rounded-[20px] border border-white glass-card shadow-[5px_5px_20.5px_0_rgba(255,255,255,0.25)_inset,-1.067px_-1.067px_1.067px_0_rgba(0,0,0,0.40)_inset,1.067px_1.067px_1.067px_0_rgba(255,255,255,0.40)_inset,-1.067px_-1.067px_1.067px_0_rgba(255,255,255,0.25)_inset,1.067px_1.067px_5.335px_0_rgba(255,255,255,0.60)_inset] relative overflow-hidden">
            <div className="absolute inset-0 rounded-[20px]" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.2px)' }}></div>
            <div className="relative z-10">
              <span className="text-white font-cabin text-[10px] font-normal leading-normal">Improve Matching and connections</span>
              <h3 className="text-white font-cabin text-4xl font-medium leading-normal mt-8 mb-4">
                Smart Matching, Not Endless Scrolling
              </h3>
              <p className="text-[#9C9A9A] font-inter text-base font-normal leading-normal">
                Get curated swipes based on your skills, interests, and project types.
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="p-8 rounded-[20px] border border-white glass-card shadow-[5px_5px_20.5px_0_rgba(255,255,255,0.25)_inset,-1.067px_-1.067px_1.067px_0_rgba(0,0,0,0.40)_inset,1.067px_1.067px_1.067px_0_rgba(255,255,255,0.40)_inset,-1.067px_-1.067px_1.067px_0_rgba(255,255,255,0.25)_inset,1.067px_1.067px_5.335px_0_rgba(255,255,255,0.60)_inset] relative overflow-hidden">
            <div className="absolute inset-0 rounded-[20px]" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.2px)' }}></div>
            <div className="relative z-10">
              <span className="text-white font-cabin text-[10px] font-normal leading-normal">Improve Collaboration efficiency</span>
              <h3 className="text-white font-cabin text-4xl font-medium leading-normal mt-8 mb-4">
                Discover Real Collaboration Requests
              </h3>
              <p className="text-[#9C9A9A] font-inter text-base font-normal leading-normal">
                From "Need a UI/UX partner" to "Join our AI tool team"—find relevant calls fast.
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="p-8 rounded-[20px] border border-white glass-card shadow-[5px_5px_20.5px_0_rgba(255,255,255,0.25)_inset,-1.067px_-1.067px_1.067px_0_rgba(0,0,0,0.40)_inset,1.067px_1.067px_1.067px_0_rgba(255,255,255,0.40)_inset,-1.067px_-1.067px_1.067px_0_rgba(255,255,255,0.25)_inset,1.067px_1.067px_5.335px_0_rgba(255,255,255,0.60)_inset] relative overflow-hidden">
            <div className="absolute inset-0 rounded-[20px]" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.2px)' }}></div>
            <div className="relative z-10">
              <span className="text-white font-cabin text-[10px] font-normal leading-normal">Improve portfolio and get hired</span>
              <h3 className="text-white font-cabin text-4xl font-medium leading-normal mt-8 mb-4">
                Showcase What You've Built
              </h3>
              <p className="text-[#9C9A9A] font-inter text-base font-normal leading-normal">
                Upload MVPs, portfolios, or open-source projects. Get ranked, get noticed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Match Make Magic Section */}
      <section className="w-full max-w-[1256px] mx-auto px-12 py-24">
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex items-center px-[15px] py-1.5 rounded-[32px] backdrop-blur-[3px] shadow-[0_-7px_11px_0_rgba(164,143,255,0.12)_inset]" style={{ background: 'rgba(255, 255, 255, 0.00)' }}>
            <span className="gradient-text-badge font-inter text-sm font-medium leading-5">Tech Meets Chemistry</span>
          </div>
          
          <h2 className="text-center font-cabin text-[56px] font-semibold leading-[64px] gradient-text-white">
            Meet. Match. Make Magic.
          </h2>
          
          <p className="text-center text-[rgba(239,237,253,0.70)] font-inter text-base font-normal leading-6">
            In just a few steps, go from "I've got an idea" to "We launched it together."
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="relative rounded-[20px] border border-white overflow-hidden shadow-[0_4px_35px_0_rgba(255,255,255,0.25)_inset,-1.266px_-1.266px_1.266px_0_rgba(0,0,0,0.40)_inset,1.266px_1.266px_1.266px_0_rgba(255,255,255,0.40)_inset,-1.266px_-1.266px_1.266px_0_rgba(255,255,255,0.25)_inset,1.266px_1.266px_6.33px_0_rgba(255,255,255,0.60)_inset]">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.8px)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/9de2a65b591eaf1b58c83d96d7222e68a31a0ce0?width=936"
              alt="Find your Co-creator"
              width={468}
              height={256}
              className="w-full"
            />
            <div className="relative z-10 p-10">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
                <path d="M14.4016 23.1996C19.2617 23.1996 23.2016 19.2597 23.2016 14.3996C23.2016 9.5395 19.2617 5.59961 14.4016 5.59961C9.54146 5.59961 5.60156 9.5395 5.60156 14.3996C5.60156 19.2597 9.54146 23.1996 14.4016 23.1996Z" fill="url(#paint0_linear)" fillOpacity="0.24" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="14.4016" y1="5.59961" x2="14.4016" y2="23.1996" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-[#F4F0FF] font-inter text-[19px] font-medium leading-[29px] mb-2">
                Find you Co-creator <span className="text-[rgba(239,237,253,0.70)] font-normal">& Swipe right to connect.</span>
              </h3>
              <p className="text-[rgba(239,237,253,0.70)] font-inter text-[19px] font-normal leading-[29px]">
                A unique space where shared skills spark deeper bonds
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative rounded-[20px] border border-white overflow-hidden shadow-[0_4px_35px_0_rgba(255,255,255,0.25)_inset,-1.266px_-1.266px_1.266px_0_rgba(0,0,0,0.40)_inset,1.266px_1.266px_1.266px_0_rgba(255,255,255,0.40)_inset,-1.266px_-1.266px_1.266px_0_rgba(255,255,255,0.25)_inset,1.266px_1.266px_6.33px_0_rgba(255,255,255,0.60)_inset]">
            <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.8px)' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/f481f48893a31f2b5fee45de7a60c704f01d0607?width=954"
              alt="Connect Chat Create"
              width={477}
              height={234}
              className="w-full mt-12"
            />
            <div className="relative z-10 p-10">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
                <path d="M30.6 14.3438H17.2125C15.6281 14.3438 14.3438 15.6281 14.3438 17.2125V30.6C14.3438 32.1844 15.6281 33.4688 17.2125 33.4688H30.6C32.1844 33.4688 33.4688 32.1844 33.4688 30.6V17.2125C33.4688 15.6281 32.1844 14.3438 30.6 14.3438Z" fill="url(#paint0_linear2)" fillOpacity="0.24" stroke="white" strokeWidth="1.2"/>
                <defs>
                  <linearGradient id="paint0_linear2" x1="23.9062" y1="14.3438" x2="23.9062" y2="33.4688" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0"/>
                    <stop offset="1" stopColor="white"/>
                  </linearGradient>
                </defs>
              </svg>
              <h3 className="text-[#F4F0FF] font-inter text-[19px] font-medium leading-[29px] mb-2">
                Connect. Chat. Create. <span className="text-[rgba(239,237,253,0.70)] font-normal">Start a conversation,</span>
              </h3>
              <p className="text-[rgba(239,237,253,0.70)] font-inter text-[19px] font-normal leading-[29px]">
                form a team, and bring your product to life.
              </p>
              <p className="text-[rgba(239,237,253,0.70)] font-inter text-[19px] font-normal leading-[29px] mt-4">
                build products, startups, or open-source projects.
              </p>
            </div>
          </div>
        </div>

        {/* Large Bottom Card */}
        <div className="relative rounded-[20px] border border-white overflow-hidden shadow-[0_4px_35px_0_rgba(255,255,255,0.25)_inset,-1.266px_-1.266px_1.266px_0_rgba(0,0,0,0.40)_inset,1.266px_1.266px_1.266px_0_rgba(255,255,255,0.40)_inset,-1.266px_-1.266px_1.266px_0_rgba(255,255,255,0.25)_inset,1.266px_1.266px_6.33px_0_rgba(255,255,255,0.60)_inset] mt-6">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.01) 0%, rgba(72, 69, 254, 0.01) 100%)', backdropFilter: 'blur(3.8px)' }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/b94de87e517325c9839ce712a25e214565539438?width=2141"
            alt="Product Collaboration"
            width={1070}
            height={316}
            className="w-full"
          />
          <div className="relative z-10 text-center py-12">
            <h3 className="w-[816px] mx-auto text-center font-inter text-[48px] font-semibold leading-[108%] tracking-[-0.48px] mb-6">
              <span className="gradient-text-purple">A Product collaboration platform for builders, dreamers, and doers.</span>
            </h3>
            <p className="text-[#F4F0FF] font-inter text-[19px] font-normal leading-[29px]">
              No more solo hustling —{' '}
              <span className="text-[rgba(239,237,253,0.70)]">
                just real connections, real collabs, and products that actually get built.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="w-full max-w-[1440px] mx-auto px-12 py-24 relative">
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex items-center px-[15px] py-1.5 rounded-[32px] backdrop-blur-[3px] shadow-[0_-7px_11px_0_rgba(164,143,255,0.12)_inset]" style={{ background: 'rgba(255, 255, 255, 0.00)' }}>
            <span className="gradient-text-badge font-inter text-sm font-medium leading-5">Core Team</span>
          </div>
          
          <h2 className="text-center font-cabin text-[96px] font-semibold leading-[64px] gradient-text-white">
            Meet Our Experts
          </h2>
          
          <p className="text-center text-[rgba(239,237,253,0.70)] font-inter text-base font-normal leading-6">
            The Processing unit behind Crowhub
          </p>
        </div>

        <div className="relative w-full h-[400px]">
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/bd68e2dea1c162f61cd7368116c469b04e423b1c?width=398"
            alt="Team Member"
            width={199}
            height={199}
            className="absolute left-[318px] top-0 rounded-[30px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/b155ea022302ffbdbe87974c4764fdb705786d2c?width=398"
            alt="Team Member"
            width={199}
            height={154}
            className="absolute left-[743px] top-[117px] rounded-[25px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/e6b17cb3e93c0fde7b86773e6ebe118f9bdd9535?width=398"
            alt="Team Member"
            width={199}
            height={199}
            className="absolute left-[1120px] top-[43px] rounded-[25px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/bafaa91a434c766454c0d943b51792e9af068b03?width=262"
            alt="Team Member"
            width={131}
            height={162}
            className="absolute left-[1205px] top-[299px] rounded-[25px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/02e45110d578dff0ed534f089339168123704004?width=398"
            alt="Team Member"
            width={199}
            height={199}
            className="absolute left-[942px] top-[380px] rounded-[25px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/ee1a388261d496347312b4487280cf497000ab15?width=404"
            alt="Team Member"
            width={202}
            height={162}
            className="absolute left-[104px] top-[461px] rounded-[25px]"
          />
          <Image
            src="https://api.builder.io/api/v1/image/assets/TEMP/5d57db0852642722f8d5796a1af555d07000382b?width=410"
            alt="Team Member"
            width={205}
            height={162}
            className="absolute left-[267px] top-[380px] rounded-[25px]"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full max-w-[1440px] mx-auto px-12 py-24">
        <div className="flex flex-col items-center gap-3 mb-16">
          <div className="flex items-center px-[15px] py-1.5 rounded-[32px] backdrop-blur-[3px] shadow-[0_-7px_11px_0_rgba(164,143,255,0.12)_inset]" style={{ background: 'rgba(255, 255, 255, 0.00)' }}>
            <span className="gradient-text-badge font-inter text-sm font-medium leading-5">Collab just got real</span>
          </div>
          
          <h2 className="text-center font-cabin text-[56px] font-semibold leading-[64px] gradient-text-white">
            Matched with Momentum
          </h2>
          
          <p className="text-center text-[rgba(239,237,253,0.70)] font-inter text-base font-normal leading-6">
            Builders Are Swiping. Projects Are Shipping.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {[
            { name: 'Sean Rose', handle: '@seanrose', text: 'Really, really liking @reflectnotes so far. It\'s just the right amount of simple/fast for a personal note taking app and does most of the hard work of organizing in the background.', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/2f3241610641641a7e5234dcbffb7a8d16a3c336?width=88' },
            { name: 'Ryan Delk', handle: '@delk', text: 'Don\'t take it from me: @reflectnotes is magic.', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/340f046b41b634e996be5f17811857ed75867b18?width=88' },
            { name: 'Demetria Giles', handle: '@drosewritings', text: 'Playing around with @reflectnotes. I\'m back logging key thoughts, details and soundbites from episodes, books, meetings, articles, etc from the past week. So far, it\'s a knowledge worker\'s dream come true.', avatar: 'https://api.builder.io/api/v1/image/assets/TEMP/c3e7d208115822c73127ba72de5b4ee1eff00226?width=88' },
          ].map((testimonial, index) => (
            <div key={index} className="min-w-[480px] p-7 rounded-2xl glass-card">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={44}
                  height={44}
                  className="rounded-full"
                />
                <div>
                  <div className="text-[#F4F0FF] font-inter text-base font-medium leading-6">{testimonial.name}</div>
                  <div className="text-[rgba(239,237,253,0.60)] font-inter text-sm font-normal leading-5">{testimonial.handle}</div>
                </div>
              </div>
              <p className="text-[rgba(239,237,253,0.70)] font-inter text-base font-normal leading-6">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[959px] mx-auto px-12 py-24 text-center">
        <h2 className="text-center font-cabin text-[72px] font-semibold leading-[110%] gradient-text-white mb-4">
          Start Building with the Right People.
        </h2>
        <h3 className="text-center font-cabin text-[72px] font-semibold leading-[110%] gradient-text-cta mb-8">
          Ready to find your co-creator?
        </h3>
        <p className="text-[#878C91] font-jakarta text-base font-medium leading-[180%] mb-8">
          Join a platform built for real work, real ideas, and real output.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <span className="text-white font-jakarta text-base font-semibold leading-[180%] underline">
            Start Matching  .  Start Building
          </span>
          
          <button className="w-[277px] h-[66px] rounded-[100px] backdrop-blur-[3px] shadow-[-1px_-1px_1px_0_rgba(0,0,0,0.40)_inset,1px_1px_1px_0_rgba(255,255,255,0.40)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,1px_1px_5px_0_rgba(255,255,255,0.60)_inset] relative" style={{ background: 'linear-gradient(90deg, rgba(197, 142, 255, 0.05) 0%, rgba(72, 69, 254, 0.05) 100%)' }}>
            <div className="flex items-center justify-center gap-6">
              <span className="text-white font-cabin text-base font-semibold leading-[140%] tracking-[-0.32px]">
                Find Your Match Now
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#06000E] relative">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/0cd7df87e2de8b145071d3753c6b49b3706aa53e?width=1472"
          alt="Background"
          width={736}
          height={1280}
          className="absolute top-0 left-0 w-full h-auto opacity-40 rotate-[-90deg]"
        />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-12 pt-32">
          <h2 className="text-center font-inter-tight text-[265px] font-bold leading-[110%] mb-16" style={{ background: 'linear-gradient(180deg, #D9C8FF -189.03%, #000014 79.1%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Crowhub
          </h2>

          <div className="flex items-center justify-center gap-5 mb-16">
            <span className="text-white font-inter-tight text-lg font-normal leading-6">Follow Us On Social Media</span>
            <div className="flex gap-3.5">
              <button className="p-5 rounded-[66px] border border-[#262626]" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.131836 1.83022C0.131836 0.89238 0.916353 0.131836 1.88396 0.131836H22.0891C23.0567 0.131836 23.8412 0.89238 23.8412 1.83022V22.1428C23.8412 23.0809 23.0567 23.8412 22.0891 23.8412H1.88396C0.916353 23.8412 0.131836 23.0809 0.131836 22.1428V1.83022Z" fill="white"/>
                  <path d="M5.52849 7.81176C6.77719 7.81176 7.55459 6.98957 7.55459 5.96216C7.53141 4.91157 6.77745 4.1123 5.5522 4.1123C4.32722 4.1123 3.52637 4.91157 3.52637 5.96216C3.52637 6.98957 4.30351 7.81176 5.50531 7.81176H5.52849Z" fill="#0F0F0F"/>
                  <path d="M7.31896 19.9786V9.27246H3.73779V19.9786H7.31896Z" fill="#0F0F0F"/>
                  <path d="M9.30054 19.9786H12.8817V13.9999C12.8817 13.6799 12.9049 13.3603 12.9995 13.1316C13.2584 12.4923 13.8475 11.8303 14.8369 11.8303C16.1328 11.8303 16.6512 12.8121 16.6512 14.2512V19.9786H20.2319V13.84C20.2319 10.5515 18.4653 9.02148 16.1091 9.02148C14.1773 9.02148 13.329 10.0945 12.8577 10.8252H12.8817V9.27254H9.30054C9.34743 10.2773 9.30054 19.9786 9.30054 19.9786Z" fill="#0F0F0F"/>
                </svg>
              </button>
              <button className="p-5 rounded-[66px] border border-[#262626] relative" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)' }}>
                <div className="w-6 h-6 relative">
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#B13589] via-[#C62F94] to-[#8A3AC8]"></div>
                  <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#E0E8B7] via-[#FB8A2E] to-[#E2425C]"></div>
                  <div className="absolute inset-0 rounded-md bg-white"></div>
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <path d="M12.75 3.375C12.75 3.99632 12.2463 4.5 11.625 4.5C11.0037 4.5 10.5 3.99632 10.5 3.375C10.5 2.75368 11.0037 2.25 11.625 2.25C12.2463 2.25 12.75 2.75368 12.75 3.375Z" fill="#1A1A1A"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 11.25C9.57107 11.25 11.25 9.57107 11.25 7.5C11.25 5.42893 9.57107 3.75 7.5 3.75C5.42893 3.75 3.75 5.42893 3.75 7.5C3.75 9.57107 5.42893 11.25 7.5 11.25ZM7.5 9.75C8.74264 9.75 9.75 8.74264 9.75 7.5C9.75 6.25736 8.74264 5.25 7.5 5.25C6.25736 5.25 5.25 6.25736 5.25 7.5C5.25 8.74264 6.25736 9.75 7.5 9.75Z" fill="#1A1A1A"/>
                  </svg>
                </div>
              </button>
              <button className="p-5 rounded-[66px] border border-[#262626]" style={{ background: 'linear-gradient(180deg, #1A1A1A 0%, rgba(26, 26, 26, 0.00) 100%)' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.58791 21.6196C16.5348 21.6196 21.4284 14.207 21.4284 7.7791C21.4284 7.56861 21.4284 7.35892 21.4142 7.15027C22.3662 6.46165 23.1879 5.60917 23.8409 4.63234C22.9532 5.02565 22.0114 5.28382 21.0469 5.39762C22.0625 4.78961 22.8225 3.8336 23.1855 2.70714C22.2306 3.27379 21.186 3.67316 20.0967 3.88786C18.2545 1.92894 15.1731 1.83437 13.2141 3.67659C11.9507 4.86469 11.4149 6.63499 11.8069 8.32442C7.89613 8.12815 4.252 6.28093 1.78201 3.24192C0.490901 5.46454 1.15029 8.30808 3.28808 9.73539C2.51384 9.71247 1.75672 9.50356 1.08021 9.12658C1.08021 9.1466 1.08021 9.16742 1.08021 9.18823C1.08074 11.5038 2.713 13.4981 4.98277 13.9567C4.26675 14.1519 3.51516 14.1806 2.78623 14.0402C3.42349 16.0218 5.24964 17.3793 7.33079 17.4183C5.60817 18.7721 3.48039 19.5068 1.28964 19.5047C0.902654 19.5039 0.516191 19.4805 0.131836 19.4344C2.3563 20.8619 4.94484 21.6191 7.58791 21.6156" fill="white"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex justify-between gap-20 mb-12">
            <div className="flex flex-col gap-6">
              <h3 className="text-white font-inter-tight text-lg font-semibold leading-[150%]">Home</h3>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Benefits</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Our Testimonials</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Partners</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white font-inter-tight text-lg font-semibold leading-[150%]">Services</h3>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Web Design</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Website Development</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">App Development</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Digital Marketing</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white font-inter-tight text-lg font-semibold leading-[150%]">Projects</h3>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">ABC Tech Solutions</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">GreenEarth Eco Store</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">HealthTech Innovations</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">GlobalTech Solutions</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">TechGuru Inc.</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white font-inter-tight text-lg font-semibold leading-[150%]">About Us</h3>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Our Team</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Achievements</a>
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Awards</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-white font-inter-tight text-lg font-semibold leading-[150%]">Blogs</h3>
              <div className="flex flex-col gap-3.5">
                <a href="#" className="text-[#808080] font-inter-tight text-lg font-normal leading-[150%]">Our Blogs</a>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-7 border-t border-[#1F1F1F]">
            <span className="text-[#666] font-inter-tight text-lg font-light leading-6 tracking-[-0.108px]">
              @2023 Pixelory. All Rights Reserved.
            </span>
            <div className="flex gap-5">
              <a href="#" className="text-[#666] font-inter-tight text-lg font-light leading-6 tracking-[-0.108px]">Privacy Policy</a>
              <a href="#" className="text-[#666] font-inter-tight text-lg font-light leading-6 tracking-[-0.108px]">Terms & Conditions</a>
              <a href="#" className="text-[#666] font-inter-tight text-lg font-light leading-6 tracking-[-0.108px]">Cookie Policy</a>
            </div>
            <span className="text-[#666] font-inter-tight text-lg font-light leading-6 tracking-[-0.108px]">Version 1.0</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
