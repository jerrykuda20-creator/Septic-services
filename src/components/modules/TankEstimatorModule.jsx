import React, { useState } from 'react';
import { Calculator, AlertTriangle, CheckCircle, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

export const TankEstimatorModule = ({ onBookWithEstimate }) => {
  const [tankSize, setTankSize] = useState(1000);
  const [occupants, setOccupants] = useState(4);
  const [hasDisposal, setHasDisposal] = useState(false);
  const [lastPumpedYears, setLastPumpedYears] = useState(3);

  // Pumping frequency calculation based on EPA standards
  const calculateEstimate = () => {
    let idealYears = 3;
    if (tankSize <= 750) {
      idealYears = occupants <= 2 ? 3 : occupants <= 4 ? 2 : 1;
    } else if (tankSize <= 1000) {
      idealYears = occupants <= 2 ? 4 : occupants <= 4 ? 3 : 2;
    } else if (tankSize <= 1250) {
      idealYears = occupants <= 2 ? 5 : occupants <= 4 ? 3.5 : 2.5;
    } else {
      idealYears = occupants <= 2 ? 6 : occupants <= 4 ? 4 : 3;
    }

    if (hasDisposal) {
      idealYears = Math.max(1, idealYears - 1);
    }

    const isOverdue = lastPumpedYears >= idealYears;
    const isCritical = lastPumpedYears >= idealYears + 2;

    let basePrice = 320;
    if (tankSize === 750) basePrice = 295;
    else if (tankSize === 1000) basePrice = 350;
    else if (tankSize === 1250) basePrice = 410;
    else if (tankSize >= 1500) basePrice = 480;

    return {
      idealFrequency: idealYears,
      isOverdue,
      isCritical,
      urgency: isCritical ? 'Critical Attention Recommended' : isOverdue ? 'Service Due Now' : 'Healthy Maintenance Window',
      estimatedPriceRange: `$${basePrice} - $${basePrice + 95}`
    };
  };

  const result = calculateEstimate();

  const handleApply = () => {
    onBookWithEstimate({
      tankSize: `${tankSize} Gallons`,
      occupants: `${occupants} People`,
      hasDisposal: hasDisposal ? 'Yes' : 'No',
      lastPumpedYears: `${lastPumpedYears} years ago`,
      estimatedPrice: result.estimatedPriceRange,
      urgency: result.urgency
    });
  };

  return (
    <section id="calculator" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="cyan" icon={Calculator} className="mb-3">
            Interactive Septic Health Estimator
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            When Does Your Septic Tank Need Pumping?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Use our EPA-calibrated algorithm to calculate your recommended pumping schedule, check your risk level, and get an instant cost preview.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-cyan-400" />
              Household & System Specifications
            </h3>

            <div className="space-y-6">
              
              {/* Tank Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">Septic Tank Capacity</label>
                  <span className="text-sm font-bold text-cyan-400">{tankSize} Gallons</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[750, 1000, 1250, 1500].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTankSize(size)}
                      className={`py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all cursor-pointer ${
                        tankSize === size
                          ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      {size} Gal
                    </button>
                  ))}
                </div>
              </div>

              {/* Occupants */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">Household Occupants</label>
                  <span className="text-sm font-bold text-cyan-400">{occupants} People</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={occupants}
                  onChange={(e) => setOccupants(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>1 Person</span>
                  <span>4 People (Avg)</span>
                  <span>8+ People</span>
                </div>
              </div>

              {/* Last Pumped */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">Years Since Last Pumping</label>
                  <span className="text-sm font-bold text-cyan-400">{lastPumpedYears} {lastPumpedYears === 1 ? 'Year' : 'Years'} ago</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="8"
                  step="1"
                  value={lastPumpedYears}
                  onChange={(e) => setLastPumpedYears(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-xs text-slate-400 mt-1">
                  <span>Just pumped (0)</span>
                  <span>3-4 Yrs</span>
                  <span>Over 8 Years</span>
                </div>
              </div>

              {/* Garbage Disposal Toggle */}
              <div className="pt-2 flex items-center justify-between p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div>
                  <span className="text-sm font-semibold text-white block">Do you use an in-sink garbage disposal?</span>
                  <span className="text-xs text-slate-400">Adds food solids requiring 30% more frequent pumping.</span>
                </div>
                <button
                  type="button"
                  onClick={() => setHasDisposal(!hasDisposal)}
                  className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                    hasDisposal ? 'bg-cyan-500' : 'bg-slate-700'
                  }`}
                >
                  <div className={`bg-slate-950 w-4 h-4 rounded-full shadow-md transform transition-transform ${
                    hasDisposal ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>

            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5">
            <Card className="border-cyan-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-4">Diagnostics Summary</h3>

              {/* Urgency Badge */}
              <div className={`p-4 rounded-2xl mb-6 flex items-start gap-3 border ${
                result.isCritical 
                  ? 'bg-red-500/10 border-red-500/30 text-red-300' 
                  : result.isOverdue 
                  ? 'bg-amber-500/10 border-amber-500/30 text-amber-300' 
                  : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
              }`}>
                {result.isOverdue ? (
                  <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                ) : (
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                )}
                <div>
                  <span className="font-bold text-sm block">{result.urgency}</span>
                  <p className="text-xs text-slate-400 mt-1">
                    {result.isCritical
                      ? 'Excess sludge may be entering the leach field. Immediate inspection strongly advised.'
                      : result.isOverdue
                      ? 'Your tank has reached or passed its safe storage threshold. Schedule pumping soon.'
                      : 'Your system is in a normal operating interval. Keep up regular preventative checks.'}
                  </p>
                </div>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Ideal Frequency</span>
                  </div>
                  <div className="text-xl font-extrabold text-white">
                    Every {result.idealFrequency} {result.idealFrequency === 1 ? 'Year' : 'Years'}
                  </div>
                </div>

                <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-1">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Estimated Cost</span>
                  </div>
                  <div className="text-xl font-extrabold text-emerald-400">
                    {result.estimatedPriceRange}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-400 mb-6">
                Includes full septic pumping, baffle inspection, and EPA transport disposal fee. No surprise surcharges.
              </p>

              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                icon={ArrowRight}
                onClick={handleApply}
              >
                Apply Estimate to Booking Form
              </Button>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
