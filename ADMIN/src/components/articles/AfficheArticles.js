import React, { useRef, useState } from 'react';
import MUIDataTable from "mui-datatables";
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from "react-redux"
import { deleteArticle } from "../../features/articleSlice";
import Insertarticle from './Insertarticle';
import Editarticle from "./Editarticle";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { fetchArticleById } from '../../services/ArticleService';
const AfficheArticles = () => {
    const [article, setArticle] = useState([]);
    const [editValue, setEditValue] = useState(null);
    const handleEdit = (value) => {
        fetchArticleById(value)
            .then((res) => {
                setArticle(res.data);
                setEditValue(value);
            });
    };
    console.log(article);
    const dispatch = useDispatch();
    const { categories } = useSelector((state) => state.storecategories);
    const { articles, isLoading, error } = useSelector((state) => state.storearticles);
    const tableRef = useRef(null);
    const handleDelete = (id) => {
        if (window.confirm("supprimer Article O/N")) {
            dispatch(deleteArticle(id));
        }
    }
    const columns = [
        {
            label: "LibArt",
            name: "LibArt",
            options: {
                filter: false,
                sort: false
            }
        },
        {
            label: "CodeArt",
            name: "CodeArt",
            options: {
                filter: false,
                sort: false
            }
        },
        {
            label: "Descrip",
            name: "Descrip",
            options: {
                filter: false,
                sort: false
            }
        },
        {
            label: "Prix",
            name: "prix1",
            options: {
                filter: false,
                sort: false
            }
        },
        {
            label: "Categorie",
            name: "CodeCat",
            options: {
                customBodyRender: (value) => {
                    const category = categories.find(cat => cat.CodeCat === value);
                    return category ? category.DesCat : value;
                }
            }
        },
        {
            label: "visible dans menu",
            name: "visible_web",
            options: {
                customBodyRender: (value) => {
                  return value === 1 ? "Visible" : "Non visible";
                }
              }
        },
        {
            label: "image_web",
            name: "image_web",
            options: {
                customBodyRender: (image_web) => (
                    <img
                        src={`${image_web}`} width={100} height={100}
                        alt="" />
                ),
                filter: false,
            }
        },
        {
            name: "CodeArt",
            label: "Actions",
            options: {
                customBodyRender: (value, tableMeta) => (
                    <div>
                        <span
                            onClick={(e) => handleEdit(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <EditIcon color='primary' />
                            {editValue && <Editarticle art={article[0]} />}
                        </span>
                        <span
                            onClick={(e) => handleDelete(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <DeleteForeverRoundedIcon color='error' />
                        </span>
                    </div>
                ),
                filter: false,
            }
        }
    ];
    const renderArticles = () => {
        if (isLoading) return <center><ReactLoading type='spokes' color="red"
            height={'1%'} width={'1%'} /></center>
        if (error) return <p>Impossible d'afficher la liste des articles...</p>
        return <React.Fragment>
            {articles &&
                <MUIDataTable
                    title="Liste articles"
                    data={articles}
                    columns={columns}
                    options={{
                        rowsPerPage: 10,
                        rowsPerPageOptions: [5, 10, 20]
                    }}
                    ref={tableRef}
                />
            }
        </React.Fragment>
    }
    return (
        <>
            <div>
                <Insertarticle />
            </div>
            <div>
                {renderArticles()}
            </div>
        </>
    )
}
export default AfficheArticles