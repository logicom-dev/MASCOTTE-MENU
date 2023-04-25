import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import image from "./article2.jpg";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { useDispatch } from 'react-redux';
export default function Modal(props) {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0,0,0,0.8)',

    }
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigate("/cart");
        console.log(product);
    };

    return (
        <section>
            <div className="modal show fade" style={modelStyle} >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{props.LibArt}</h5>
                            <button type="button" className="btn-close" onClick={props.hide}></button>
                        </div>
                        <div className="modal-body">
                            <Card variant="outlined" sx={{ width: 320 }}>
                                <CardOverflow>
                                    <AspectRatio ratio="1">
                                        <picture>
                                            <source srcset={props.image_web} media="(max-width: 767px)" />
                                            <source srcset={props.image_web} media="(min-width: 768px) and (max-width: 1023px)" />
                                            <source srcset={props.image_web} media="(min-width: 1024px)" />
                                            <img
                                                src={props.image_web}
                                                srcSet={props.image_web}
                                                loading="lazy"
                                                alt=""
                                            />
                                        </picture>

                                    </AspectRatio>

                                </CardOverflow>
                                <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                                    <p>{props.Descrip}</p>
                                </Typography>
                                <Divider inset="context" />
                                <CardOverflow
                                    variant="soft"
                                    sx={{
                                        display: 'flex',
                                        gap: 1,
                                        py: 0.5,
                                        px: 'var(--Card-padding)',
                                        bgcolor: 'background.level1',
                                    }}
                                >
                                    <Typography level="body3" sx={{ fontWeight: 'md', color: 'text.secondary' }}>
                                        Prix : {props.prix1} Dt
                                    </Typography>

                                </CardOverflow>
                                <button className="btn btn-primary" onClick={() => handleAddToCart(props)}>
                                    Add To Cart
                                </button>

                            </Card>


                        </div>
                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
{/* <button className="btn btn-primary" onClick={() => handleAddToCart(props)}>
                                    Add To Cart
                                </button> */}
