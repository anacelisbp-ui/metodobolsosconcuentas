import { Lock } from "lucide-react";

interface CTAButtonProps {
  text?: string;
  microcopy?: string;
}

const CTAButton = ({ 
  text = "👉 QUIERO APRENDER A CREAR MIS BOLSOS",
  microcopy = "Acceso inmediato + pago seguro"
}: CTAButtonProps) => (
  <div className="flex flex-col items-center w-full">
    <button type="button" className="cta-button">
      {text}
    </button>
    <p className="microcopy">
      <Lock className="w-4 h-4" />
      {microcopy}
    </p>
  </div>
);

export default CTAButton;
