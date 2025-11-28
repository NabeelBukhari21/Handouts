
import React from 'react';
import { ViewState, User } from '../types';
import {
  Sparkles, Activity, ShieldCheck, Users,
  Rocket, Search, HandHeart, RefreshCw, Zap, CheckCircle2
} from 'lucide-react';

interface HeroProps {
  setView: (view: ViewState) => void;
  user: User | null;
}

const Hero: React.FC<HeroProps> = ({ setView, user }) => {
  
  const handlePrimaryAction = () => {
    if (user) {
      setView('MARKETPLACE');
    } else {
      setView('SIGNUP');
    }
  };

  const handleSecondaryAction = () => {
    if (user) {
      setView('DASHBOARD');
    } else {
      setView('LOGIN');
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO BANNER */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] -z-10"></div>
        
        {/* Animated Particles (CSS Based) */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-emerald-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-1/3 right-20 w-3 h-3 bg-teal-300 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            <span className="text-sm font-medium text-slate-300">Enterprise-grade coordination with Gemini AI</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Human-centered relief <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 text-neon">
              built for professional teams
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A polished operating layer for city programs, nonprofits, and community responders. Handouts delivers trustworthy matching, structured data, and compassionate journeys—without the manual overhead.
          </p>

          {/* Fun Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up items-center" style={{ animationDelay: '0.3s' }}>
            
            {/* Main Action Button */}
            <button 
              onClick={handlePrimaryAction}
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-900 font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
            >
              <span className="text-lg">{user ? 'Browse Marketplace' : 'Launch Handouts'}</span>
              <Rocket className="w-5 h-5 group-hover:animate-bounce-subtle" />
            </button>

            {/* Secondary Action */}
            <button
              onClick={handleSecondaryAction}
              className="group relative px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
            >
              {user ? 'View Insights' : 'See Dashboard'}
              <Activity className="w-5 h-5 text-emerald-400 group-hover:animate-pulse" />
            </button>
          </div>

          {/* Credibility */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto text-left animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
            {[ 
              { label: 'Coordinated handoffs', metric: '1,200+', meta: 'completed with zero safety incidents' },
              { label: 'Service-level uptime', metric: '99.9%', meta: 'cloud monitored & resilient' },
              { label: 'Avg. response time', metric: '< 3 min', meta: 'from intake to suggested match' },
            ].map((stat, idx) => (
              <div key={idx} className="glass-card rounded-2xl px-5 py-4 border border-white/5 hover:border-emerald-500/30 transition-colors">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400 mb-2">{stat.label}</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-white">{stat.metric}</span>
                  <span className="text-xs text-emerald-300/90">{stat.meta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {[
              {
                icon: Sparkles,
                title: "Structured AI intake",
                desc: "Gemini translates natural language into clean, prioritized cases—ready for dispatch or reporting."
              },
              {
                icon: ShieldCheck,
                title: "Safety-first matching",
                desc: "Eligibility, urgency, and proximity are balanced automatically so the right people get help first."
              },
              {
                icon: Users,
                title: "Operational clarity",
                desc: "Keep teams aligned with crisp statuses, location confidence, and next-best-actions in one workspace."
              }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-emerald-500/30 group">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center mb-4 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* SECTION 2: HOW IT WORKS */}
      <div className="py-24 bg-slate-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">How Handouts Works</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">A clear, accountable flow from intake to handoff so every exchange stays safe and human.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>

                {[ 
                    { icon: Search, title: "1. Capture the story", desc: "Describe the situation in plain language. Intake is structured automatically for your team." },
                    { icon: Zap, title: "2. Confirm the match", desc: "See vetted recommendations with distance, urgency, and fit so you can approve quickly." },
                    { icon: HandHeart, title: "3. Close the loop", desc: "Message safely, coordinate handoffs, and keep stakeholders informed with status updates." }
                ].map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center z-10">
                        <div className="w-24 h-24 bg-slate-900 rounded-full border-4 border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <step.icon className="w-10 h-10 text-emerald-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-400 text-sm max-w-xs">{step.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* SECTION 3: IMPACT & CTA */}
      <div className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-900/10"></div>
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
              <div className="inline-flex p-3 bg-emerald-500/10 rounded-full mb-6">
                  <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin-slow" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join the Movement</h2>
              <p className="text-xl text-slate-300 mb-10">
                  Purpose-driven teams already rely on Handouts to reduce waste, increase equity, and keep every exchange accountable.
              </p>
              
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-medium">Free to use</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-medium">Verified Users</span>
                  </div>
                  <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-white font-medium">Secure Data</span>
                  </div>
              </div>

              <button 
                onClick={handlePrimaryAction}
                className="px-10 py-5 bg-white text-slate-900 font-bold rounded-full text-lg hover:scale-105 transition-transform shadow-2xl shadow-emerald-500/20"
              >
                  {user ? 'Go to Dashboard' : 'Create Your Account'}
              </button>
          </div>
      </div>

    </div>
  );
};

export default Hero;
