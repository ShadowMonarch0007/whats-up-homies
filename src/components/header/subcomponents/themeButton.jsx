// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";

// export default function ThemeButton() {
//     const { theme, setTheme } = useTheme();

//     const toggleTheme = () => {
//         const newTheme = theme === "dark" ? "light" : "dark";
//         setTheme(newTheme);
//         window.location.reload();
//     };

//     return (
//         <Button variant="outline" size="icon" onClick={toggleTheme}>
//             {(theme === "dark") ? (
//                 <div>
//                     <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//                 </div>
//             ) : (
//                 <div>
//                     <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90" />
//                 </div>
//             )}
//         </Button>
//     );
// }


"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    window.location.reload();
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {theme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      )}
    </Button>
  );
}
