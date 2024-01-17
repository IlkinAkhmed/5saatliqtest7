import React, { useEffect, useState } from 'react'
import "./index.scss"
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios, { all } from 'axios';


function AddPage() {


    const [allData, setAllData] = useState([])
    const [input, setInput] = useState('')
    const [sortedData, setSortedData] = useState(null)

    async function handleSubmit(values) {
        await axios.post('http://localhost:3800/products', values)
        values('')
    }

    async function fetchAllData() {
        const res = await axios.get('http://localhost:3800/products')
        setAllData(res.data)
    }

    useEffect(() => {
        fetchAllData()
    }, [allData])

    async function deleteData(id) {
        await axios.delete(`http://localhost:3800/products/${id}`)
        fetchAllData()
    }


    return (
        <div>
            <Helmet>
                <title>
                    Home | Add
                </title>
            </Helmet>
            <div className="add">
                <Formik
                    initialValues={{ image: '', title: '', price: '', description: '', like: '', star: '' }}
                    validationSchema={Yup.object({
                        image: Yup.string()
                            .min(10, 'Must be 10 characters or less')
                            .required('Required'),
                        title: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        price: Yup.number().required('Required'),
                        description: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        star: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        like: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values)
                        setTimeout(() => {
                            alert('Post Created!!!', JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form className='form'>
                        <label htmlFor="image">Image</label>
                        <Field className='input' name="image" type="text" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="image" />
                        </div>

                        <label htmlFor="title">Title</label>
                        <Field className='input' name="title" type="text" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="title" />
                        </div>

                        <label htmlFor="price">Price</label>
                        <Field className='input' name="price" type="number" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="price" />
                        </div>

                        <label htmlFor="description">Description</label>
                        <Field className='input' name="description" type="text" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="description" />
                        </div>

                        <label htmlFor="star">Star</label>
                        <Field className='input' name="star" type="text" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="star" />
                        </div>

                        <label htmlFor="like">Like</label>
                        <Field className='input' name="like" type="text" />
                        <div style={{ color: 'red' }}>
                            <ErrorMessage name="like" />
                        </div>

                        <button className='submit' type="submit">Submit</button>
                    </Form>
                </Formik>

                <h1 style={{ fontWeight: 'bold', padding: "30px 0" }}>All Products</h1>
                <div className="filter-area">
                    <input type="text" placeholder='Search Name...' onChange={(e) => setInput(e.target.value)} />
                    <button onClick={() => setSortedData({ property: "price", asc: true })}>Price Low to High</button>
                    <button onClick={() => setSortedData({ property: "price", asc: false })}>Price High to Low</button>
                    <button onClick={() => setSortedData({ property: "title", asc: true })}>A-z</button>
                    <button onClick={() => setSortedData({ property: "title", asc: false })}>z-A</button>
                    <button onClick={() => setSortedData(null)}>  Default</button>
                </div>
                {allData &&
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Stars</th>
                                <th>Likes</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {allData
                                .filter(x => x.title.trim().toLowerCase().includes(input.trim().toLowerCase()))
                                .sort((a, b) => {
                                    if (sortedData && sortedData.asc) {
                                        return (a[sortedData.property] > b[sortedData.property] ? 1 : ((a[sortedData.property]) < b[sortedData.property] ? -1 : 0))
                                    } else if (sortedData && sortedData.asc == false) {
                                        return (a[sortedData.property] > b[sortedData.property] ? -1 : ((a[sortedData.property]) < b[sortedData.property] ? 1 : 0))
                                    } else {
                                        return 0;
                                    }
                                })
                                .map(item => (
                                    <tr>
                                        <td>{item._id}</td>
                                        <td><img style={{ width: "40px", borderRadius: "100%" }} src={item.image} alt="" /></td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td width={70}>{item.star}<i style={{ color: "orangered" }} className='fa-solid fa-star'></i> </td>
                                        <td>{item.like}<i style={{ color: "red" }} className='fa-solid fa-heart'></i></td>
                                        <td>{item.description}</td>
                                        <td><i onClick={() => deleteData(item._id)} className='fa-solid fa-trash-can'></i></td>
                                    </tr>
                                ))}

                        </tbody>
                    </table>
                }

            </div>
        </div>
    )
}

export default AddPage