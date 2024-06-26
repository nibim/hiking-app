export function AccountInfo(params) {
    return(
        <div className="userContent">
        <p>Welcome, {params.user.email}</p>
        <input className={'inputButton'} type="button" onClick={params.logoutHandler} value={'Sign Out'} />
        </div>
    )
} 