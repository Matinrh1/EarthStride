import tc from "../assets/back-grounds/textsection.png"
export default function TextSection() {
    return (
      <section className="relative w-full flex items-center justify-center text-center text-white py-12 md:py-20 px-4">
        {/* Background Image */}
        <img 
          src={tc}
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            We Make Better Things In A Better Way
          </h1>
          <p className="mt-4 text-base md:text-lg">
            By looking to the world’s greatest innovator—Nature—we create shoes that deliver 
            unrivaled comfort that you feel good in and feel good about.
          </p>
          <p className="mt-6 text-lg md:text-xl font-semibold italic">
            earthstride
          </p>
          <p className="text-sm uppercase tracking-widest">By Nature</p>
        </div>
      </section>
    );
  }
  