import { useState } from "react";
import { Home, Folder, CheckSquare, Clock, Users, Layers, Settings, Plus, HelpCircle, Menu, User } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = () => {
    const [active, setActive] = useState("Dashboard");
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Dashboard", icon: Home },
        { name: "Projects", icon: Folder },
        { name: "Tasks", icon: CheckSquare },
        { name: "Time log", icon: Clock },
        { name: "Resource mgnt", icon: Users },
        { name: "Users", icon: Users },
        { name: "Project template", icon: Layers },
        { name: "Menu settings", icon: Settings },
    ];

    return (
        <>
            {/* Top Navbar */}
            <div className="d-flex justify-content-between align-items-center bg-dark text-white p-3 shadow-sm">
                {/* Hamburger Menu */}
                <button className="btn btn-dark" onClick={() => setIsOpen(!isOpen)}>
                    <Menu size={24} />
                </button>

                {/*/!* Search Bar *!/*/}
                {/*<div className="d-flex align-items-center bg-light rounded px-2">*/}
                {/*    <Search size={20} className="text-muted" />*/}
                {/*    <input type="text" className="form-control border-0" placeholder="Search..." />*/}
                {/*</div>*/}

                {/* User Profile */}
                <div className="d-flex align-items-center">
                    <User size={24} className="me-2" />
                    <span>User Name</span>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`sidebar bg-dark text-white p-4 rounded shadow-lg vh-100 ${isOpen ? "open" : ""}`}>
                {/* Logo */}
                <div>
                    <h1 className="h4 mb-4 d-flex align-items-center">
                        <span className="logo-dot me-2"></span>
                        Promage
                    </h1>

                    {/* Create New Project Button */}
                    <button className="btn btn-warning w-100 d-flex align-items-center gap-2 mb-4">
                        <Plus size={16} />
                        Create new project
                    </button>

                    {/* Navigation Items */}
                    <nav className="nav flex-column">
                        {navItems.map(({ name, icon: Icon }) => (
                            <button
                                key={name}
                                onClick={() => setActive(name)}
                                className={`btn text-start d-flex align-items-center gap-3 mb-2 ${active === name ? "btn-warning" : "btn-outline-light"}`}
                            >
                                <Icon size={20} />
                                {name}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* Help/Support Button */}
                <div>
                    <button className="btn btn-outline-light w-100 d-flex align-items-center gap-3">
                        <HelpCircle size={20} />
                        Help
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
