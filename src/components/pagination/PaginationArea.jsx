/* eslint-disable react/prop-types */


const PaginationArea = ({ pageNumber, paginate, pageStart, next, prev, lastPage }) => {

    return (
        <div className="">
            <nav aria-label="Page navigation example">
                <ul className="inline-flex -space-x-px text-sm">
                    <li onClick={prev}>
                        <a className={pageStart == + 1 ? `flex items-center justify-center px-3 h-8 leading-tight text-[#767676]
                                 bg-[white] border-[2px] border-[#F0F0F0] rounded-s-lg
                                 ` : `flex items-center justify-center px-3 h-8 leading-tight rounded-s-lg text-[#fff] bg-[#262626] border-[2px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF]
                                 `}>Previous</a>
                    </li>
                    {pageNumber.map((item, i) => (
                        <>
                            <li onClick={() => paginate(item)}>
                                <a className={pageStart == i + 1 ? `flex items-center justify-center px-3 h-8 leading-tight text-[#FFFFFF]
                                 bg-[#262626] border-[2px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF]
                                 ` : `flex items-center justify-center px-3 h-8 leading-tight text-[#767676] bg-[white] border-[2px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF]
                                 `}>{item + 1}</a>
                            </li >
                        </>
                    ))}
                    <li onClick={next}>
                        <a className={pageStart ? `flex items-center justify-center px-3 h-8 leading-tight text-[#767676]
                                 bg-[#262] border-[2px] border-[#F0F0F0] rounded-e-lg
                                 ` : `flex items-center justify-center px-3 h-8 leading-tight rounded-e-lg text-[#fff] bg-[#fff] border-[2px] border-[#F0F0F0] hover:bg-[#262626] hover:text-[#FFFFFF]
                                 `}>Next</a>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default PaginationArea