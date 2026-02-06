import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

export default function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-6 md:bottom-10 md:right-10 flex flex-col items-center gap-4 z-999">
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full size-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-background/70 backdrop-blur-md hover:bg-accent border border-border/50 dark:border-border transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.6)]"
              onClick={scrollToTop}
            >
              <ArrowUp className="size-6 transition-transform hover:-translate-y-1" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <ModeToggle className="rounded-full size-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.5)] bg-background/70 backdrop-blur-md hover:bg-accent border border-border/50 dark:border-border transition-all hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] dark:hover:shadow-[0_8px_40px_rgb(0,0,0,0.6)]" />
    </div>
  );
}
