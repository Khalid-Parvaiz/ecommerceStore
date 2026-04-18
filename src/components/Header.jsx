export default function Header({user}) {
    return(
        <header className="w-[100%] h-15 p-2.5 bg-blue-200 flex items-center justify-between" >
            <div className="text-2xl font-semibold">Dashboard</div>
            <div className="w-auto h-10 rounded-4xl p-1  pr-2 bg-blue-100 flex gap-1 items-center justify-between">
                <div className="w-8 h-8 rounded-4xl bg-white"><img src={user?.image} alt="" /></div>
                <div className="text-sm">{user?.firstName + ' ' + user?.lastName}</div>
            </div>
        </header>
    )
}