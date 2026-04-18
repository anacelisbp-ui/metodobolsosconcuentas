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
    <a href="https://pay.hotmart.com/Y91660116H" target="_blank" rel="noopener noreferrer" className="cta-button">
      {text}
    </a>
    <p className="microcopy">
      <Lock className="w-4 h-4" />
      {microcopy}
    </p>
  </div>
);

export default CTAButton;
