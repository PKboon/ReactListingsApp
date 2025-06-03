import { ChevronDown, Laptop, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useAuth } from '@/components/AuthProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Separator,
  DropdownMenuPortal,
} from '@/components/ui';
import useSignOutMutation from '@/hooks/mutations/useSignOutMutation';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const { setToken, setUser } = useAuth();
  const { setTheme } = useTheme();

  const signOutMutation = useSignOutMutation();

  const handleSignOut = async () => {
    try {
      await signOutMutation.mutateAsync();

      setToken(null);
      setUser(null);
    } catch {
      setToken(null);
      setUser(null);
    }
  };

  return (
    <>
      <div className='flex flex-col items-center justify-between gap-x-8 gap-y-2 px-8 py-4 sm:flex-row'>
        <Link to='/'>Home</Link>
        <div className='flex-end flex items-center gap-x-8'>
          <Link to='/favorites'>Favorites</Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Link className='flex items-center gap-1'>
                Account <ChevronDown size={14} />
              </Link>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem asChild>
                <Link to='/profile'>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to='/listings/create' className='text-nowrap'>
                  Create Listing
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <span>Theme</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem onClick={() => setTheme('light')}>
                      <Sun className='mr-2 h-4 w-4' />
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('dark')}>
                      <Moon className='mr-2 h-4 w-4' />
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme('system')}>
                      <Laptop className='mr-2 h-4 w-4' />
                      System
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Navbar;
