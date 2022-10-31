export const variants = {
    fadeUpDelay :{
        hidden : { 
            opacity: 0,
            y: 40
        },
        visible: { 
            opacity:1,
            y: 0,
            transition: {
                duration:0.5,
                ease: 'easeInOut',
                delay: 0.4
            }
        
        }
    },
    fadeDown :{
        hidden : { 
            opacity: 0,
            y: -40
        },
        visible: { 
            opacity:1,
            y: 0,
            transition: {
                duration:0.5,
                ease: 'easeInOut'
            }
        
        }
    },
    fadeUp :{
        hidden : { 
            opacity: 0,
            y: 40
        },
        visible: { 
            opacity:1,
            y: 0,
            transition: {
                duration:0.5,
                ease: 'easeInOut',
                
            }
        
        }
    },
}