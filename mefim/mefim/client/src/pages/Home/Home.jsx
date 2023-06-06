import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMovieApi, getPhimLeTheoTheLoaiApi, getPhimChieuRapTheoNamApi, getPhimBoTheoQuocGiaApi} from '../../redux/reducer/filmReducer';

export default function Home(props) {

    const { listPhimLeMoiCapNhat, ListPhimChieuRap, listPhimBo } = useSelector(state => state.filmReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const actionGetPhimLe = getAllMovieApi()
        dispatch(actionGetPhimLe)
    }, []);

    const renderPhimle = () => {
        return listPhimLeMoiCapNhat.map((film, index) => {
            if (index === 0) {
                return <div className="large" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            } else {
                return <div className="small" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            }
        })
    }

    const renderPhimChieuRap = () => {
        return ListPhimChieuRap.map((film, index) => {
            if (index === 0) {
                return <div className="large" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            } else {
                return <div className="small" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            }
        })
    }

    const renderPhimBo = () => {
        const limitedListPhimBo = listPhimBo.slice(0, 17);
        return limitedListPhimBo.map((film, index) => {
            if (index === 0) {
                return <div className="large" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            } else {
                return <div className="small" key={index}>
                    <NavLink title={film.primary_title} to={`/info/${film.url_name}`}>
                        <img src={film.cover_image} alt="" />
                        <span className='label'>HD-Vietsub</span>
                        <p>{film.primary_title}</p>
                    </NavLink>
                </div>
            }
        })
    }

    return (
        <div className='container pd-80'>
            <ul className="tabs nav nav-tabs border-0 mb-4">
                <h4 className='mr-5' onClick={() => {
                    
                }}>PHIM LẺ MỚI CẬP NHẬT</h4>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const theloai = "hanh-dong";
                        const action = getPhimLeTheoTheLoaiApi(theloai);
                        dispatch(action);
                    }}>Hành động</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const theloai = "hoat-hinh";
                        const action = getPhimLeTheoTheLoaiApi(theloai);
                        dispatch(action);
                    }}>Hoạt hình</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const theloai = "kinh-di";
                        const action = getPhimLeTheoTheLoaiApi(theloai);
                        dispatch(action);
                    }}>Kinh dị</button>
                </li>
            </ul>
            <div className="list-film">
                {renderPhimle()}
                <div className="clear"></div>
            </div>

            <ul className="tabs nav nav-tabs border-0 mb-4 mt-5">
                <h4 className='mr-5'>PHIM CHIẾU RẠP</h4>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const year = "2023";
                        const action = getPhimChieuRapTheoNamApi(year);
                        dispatch(action);
                    }}>2023</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const year = "2022";
                        const action = getPhimChieuRapTheoNamApi(year);
                        dispatch(action);
                    }}>2022</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const year = "2021";
                        const action = getPhimChieuRapTheoNamApi(year);
                        dispatch(action);
                    }}>2021</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const year = "2020";
                        const action = getPhimChieuRapTheoNamApi(year);
                        dispatch(action);
                    }}>2020</button>
                </li>
            </ul>
            <div className="list-film">
                {renderPhimChieuRap()}
                <div className="clear"></div>
            </div>

            <ul className="tabs nav nav-tabs border-0 mb-4 mt-5">
                <h4 className='mr-5'>PHIM BỘ MỚI CẬP NHẬT</h4>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const nation = "han-quoc";
                        const action = getPhimBoTheoQuocGiaApi(nation);
                        dispatch(action);
                    }}>Hàn Quốc</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const nation = "trung-quoc";
                        const action = getPhimBoTheoQuocGiaApi(nation);
                        dispatch(action);
                    }}>Trung Quốc</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const nation = "au-my";
                        const action = getPhimBoTheoQuocGiaApi(nation);
                        dispatch(action);
                    }}>Âu - Mỹ</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn" onClick={() => {
                        const nation = "nhat-ban";
                        const action = getPhimBoTheoQuocGiaApi(nation);
                        dispatch(action);
                    }}>Nhật Bản</button>
                </li>
            </ul>
            <div className="list-film">
                {renderPhimBo()}
                <div className="clear"></div>
            </div>
        </div>
    )
}
