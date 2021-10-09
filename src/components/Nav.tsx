export default function Nav() {
    return (
        <div className="bg-indigo-600 dark:bg-indigo-800 text-white flex h-20 w-auto items-center px-4">
            <a href="/" className="text-white text-4xl">Deity</a>
            <div className="flex-grow" />
            <button className="px-4 py-2 rounded-md bg-indigo-700 dark:bg-indigo-900 hover:shadow transition-colors">Login with Google</button>
        </div>
    );
}
