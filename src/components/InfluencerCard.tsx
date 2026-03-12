import { Check, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface InfluencerProps {
  name: string;
  title: string;
  image: string;
  role: string;
  reason: string;
  pillars: string[];
  script: string;
  reverse?: boolean;
}

export default function InfluencerCard({ 
  name, 
  title, 
  image, 
  role, 
  reason, 
  pillars, 
  script,
  reverse = false 
}: InfluencerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-[#0a1d37]/40 backdrop-blur-xl rounded-[3rem] shadow-2xl overflow-hidden border border-white/5 mb-20"
    >
      {/* Influencer Header */}
      <div className="bg-gradient-to-r from-[#0a1d37] to-[#050f1d] p-10 md:p-16 border-b border-white/5">
        <div className={`flex flex-col md:flex-row items-center gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className="relative">
            <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-[#c5a059] p-1 overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={name} 
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#c5a059] text-[#050f1d] px-6 py-2 rounded-full font-bold text-sm shadow-lg">
              {role}
            </div>
          </div>
          <div className={`text-center ${reverse ? 'md:text-left' : 'md:text-right'}`}>
            <h3 className="text-4xl md:text-6xl font-lyon mb-4">{name}</h3>
            <p className="text-[#c5a059] text-xl md:text-2xl font-light">{title}</p>
          </div>
        </div>
      </div>

      <div className="p-10 md:p-20">
        <div className="space-y-20">
          {/* Reason Section */}
          <div>
            <h4 className="text-2xl font-lyon text-[#c5a059] mb-6 flex items-center gap-4">
              <span className="w-10 h-px bg-[#c5a059]"></span>
              سبب الاختيار والتوقيت
            </h4>
            <p className="text-gray-300 leading-loose text-lg font-light">
              {reason}
            </p>
          </div>

          {/* Pillars Section */}
          <div>
            <h4 className="text-2xl font-lyon text-[#c5a059] mb-8 flex items-center gap-4">
              <span className="w-10 h-px bg-[#c5a059]"></span>
              المحاور الأساسية
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pillars.map((item, index) => (
                <div key={index} className="flex items-center p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-[#c5a059]/30 transition-all group">
                  <Check className="w-6 h-6 text-[#c5a059] ml-4 flex-shrink-0" />
                  <span className="text-gray-200 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Script Section */}
          <div className="relative">
            <div className="bg-[#050f1d]/80 p-10 md:p-16 rounded-[3rem] border border-[#c5a059]/30 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#c5a059] to-transparent opacity-50"></div>
              <Quote className="absolute -top-6 -left-6 w-24 h-24 text-[#c5a059]/5 -rotate-12" />
              
              <div className="flex items-center justify-between mb-10">
                <h4 className="text-2xl font-lyon text-[#c5a059]">النص الإرشادي (السكربت)</h4>
                <span className="text-[10px] tracking-[0.3em] text-[#c5a059]/50 uppercase font-bold">Production Script</span>
              </div>

              <div className="text-gray-300 italic leading-[2.2] text-xl font-light whitespace-pre-wrap relative z-10">
                {script}
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-500 uppercase tracking-widest">
                <span>Scene 01</span>
                <span>Interior / Exterior</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
