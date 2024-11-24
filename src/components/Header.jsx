import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

const animations = {
  logo: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" }
    }
  },
  navigation: {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.1
      }
    }
  },
  menuItem: {
    initial: { opacity: 0, x: 100 },
    animate: { 
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  },
  mobileMenu: {
    initial: {
      x: '100%',
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
};

const NAVIGATION_ITEMS = [
  { id: 'home', text: 'Home' },
  { id: 'about', text: 'About Us' },
  { id: 'aim', text: 'Our Motto' },
  { 
    id: 'services', 
    text: 'Services',
    subItems: [
      { 
        id: 'services-mother', 
        text: 'Mother'
      },
      { 
        id: 'services-newborn', 
        text: 'Newborn'
      }
    ]
  },
  { id: 'contact', text: 'Contact Us' }
];

export const Header = ({ 
  background = 'transparent',
  top = '50px',
  height = '20vh',
  onSectionClick 
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = useCallback((id) => {
    onSectionClick?.(id);
    setActiveDropdown(null);
    setMenuOpen(false);
  }, [onSectionClick]);

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        backgroundColor: background,
        height,
        transition: { duration: 0.4 }
      }}
    >
      <motion.div 
        className={styles.logo}
        variants={animations.logo}
        initial="initial"
        animate="animate"
        style={{ top }}
      >
        <motion.img 
          className={styles.logoImg}
          src="/assets/logo.png" 
          alt="Mom & Newborn Logo"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />
        <div className={styles.textContainer}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            MOM & NEWBORN
          </motion.h1>
          <motion.p 
            className={styles.subtext}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <em>" We Care for Better Motherhood & Newborn "</em>
          </motion.p>
        </div>
      </motion.div>

      {/* Regular Navigation */}
      <motion.nav 
        className={styles.navigation}
        variants={animations.navigation}
        initial="initial"
        animate="animate"
        style={{ top }}
      >
        <motion.ul 
          className={styles.navList}
          variants={animations.navigation}
          role="menubar"
        >
          {NAVIGATION_ITEMS.map((item) => (
            <motion.li
              key={item.id}
              className={styles.navItem}
              variants={animations.menuItem}
              whileHover="hover"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              role="menuitem"
            >
              <motion.a 
                className={styles.navLink}
                onClick={() => !item.subItems && handleNavClick(item.id)}
                tabIndex={0}
                data-has-dropdown={item.subItems ? true : undefined}
              >
                {item.text}
              </motion.a>
              
              {item.subItems && activeDropdown === item.id && (
                <motion.ul
                  className={styles.dropdown}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.subItems.map((subItem) => (
                    <motion.li
                      key={subItem.id}
                      className={styles.dropdownItem}
                      onClick={() => handleNavClick(subItem.id)}
                    >
                      {subItem.text}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>

      {/* Hamburger Button */}
      <motion.button
        className={styles.hamburger}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ top }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-label="Toggle menu"
      >
        &#9776;
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className={styles.mobileMenu}
            variants={animations.mobileMenu}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.ul 
              className={styles.mobileNavList}
              variants={animations.navigation}
              role="menubar"
            >
              {NAVIGATION_ITEMS.map((item) => (
                <motion.li
                    key={`mobile-${item.id}`}
                    className={styles.mobileNavItem}
                    variants={animations.menuItem}
                >
                    {item.id !== 'services' ? (
                    <motion.a 
                        className={styles.mobileNavLink}
                        onClick={() => handleNavClick(item.id)}
                        tabIndex={0}
                    >
                        {item.text}
                    </motion.a>
                    ) : (
                    <div>
                        <motion.a
                        className={styles.mobileNavLink}
                        tabIndex={0}
                        >
                        {item.text}
                        </motion.a>
                        <motion.div
                        className={styles.subMenu}
                        >
                        {item.subItems.map(subItem => (
                            <motion.a
                            key={subItem.id}
                            className={styles.mobileNavSubLink}
                            onClick={() => handleNavClick(subItem.id)}
                            tabIndex={0}
                            >
                            {subItem.text}
                            </motion.a>
                        ))}
                        </motion.div>
                    </div>
                    )}
                </motion.li>
                ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;