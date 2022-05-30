const Header = () => {
  return (
    <div class="bg-white">
      <div class="max-w-screen-2xl">
        <header class="flex justify-between items-center py-2 md:py-4">
          <a href="/" class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5" aria-label="logo">
            🐻
          </a>

          <nav class="hidden lg:flex gap-12">
            <a href="/" class="text-gray-600 hover:text-amber-600 active:text-amber-800 text-lg font-semibold transition duration-100">Home</a>
            <a href="/posts" class="text-gray-600 hover:text-amber-600 active:text-amber-800 text-lg font-semibold transition duration-100">Posts</a>
          </nav>

          <button type="button" class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
            </svg>

            Menu
          </button>
        </header>
      </div>
    </div>
  )
}

export default Header