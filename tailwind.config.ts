import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			'cotton-blue': {
  				'50': '#e6f7ff',
  				'100': '#bae3ff',
  				'200': '#7ccbff',
  				'300': '#38b2ff',
  				'400': '#0099f7',
  				'500': '#01A0E9',
  				'600': '#0080c9',
  				'700': '#0060a9',
  				'800': '#004c8c',
  				'900': '#003b6d',
  			},
  			'cotton-yellow': {
  				'50': '#fffce6',
  				'100': '#fff7b2',
  				'200': '#fff287',
  				'300': '#ffea59',
  				'400': '#ffe033',
  				'500': '#FFCB00',
  				'600': '#d6a600',
  				'700': '#a37f00',
  				'800': '#705600',
  				'900': '#4d3a00',
  			},
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			"accordion-down": {
  				from: { height: "0" },
  				to: { height: "var(--radix-accordion-content-height)" },
  			},
  			"accordion-up": {
  				from: { height: "var(--radix-accordion-content-height)" },
  				to: { height: "0" },
  			},
  			fadeIn: {
  				'0%': { opacity: '0' },
  				'100%': { opacity: '1' },
  			},
  			slideInRight: {
  				'0%': { transform: 'translateX(100%)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' },
  			},
  			slideInLeft: {
  				'0%': { transform: 'translateX(-100%)', opacity: '0' },
  				'100%': { transform: 'translateX(0)', opacity: '1' },
  			},
  			floating: {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			pulse: {
  				'0%, 100%': { opacity: '1' },
  				'50%': { opacity: '0.5' },
  			},
  			rotate: {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' },
  			}
  		},
  		animation: {
  			"accordion-down": "accordion-down 0.2s ease-out",
  			"accordion-up": "accordion-up 0.2s ease-out",
  			fadeIn: 'fadeIn 1s ease-in-out forwards',
  			slideInRight: 'slideInRight 0.8s ease-out forwards',
  			slideInLeft: 'slideInLeft 0.8s ease-out forwards',
  			floating: 'floating 3s ease-in-out infinite',
  			pulse: 'pulse 2s ease-in-out infinite',
  			rotate: 'rotate 30s linear infinite',
  			'rotate-slow': 'rotate 60s linear infinite',
  		},
  		backgroundImage: {
  			'cotton-gradient': 'linear-gradient(to right, #01A0E9, #FFCB00)',
  			'cotton-radial': 'radial-gradient(circle, #01A0E9, #0080C9)',
  		},
  		boxShadow: {
  			'cotton': '0 10px 30px -5px rgba(1, 160, 233, 0.3)',
  			'cotton-lg': '0 20px 40px -10px rgba(1, 160, 233, 0.4)',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
