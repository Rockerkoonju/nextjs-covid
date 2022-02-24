
const UpdateDate = ({ data }) => {
    const Date = data[0].update_date
    return <>
        update at {Date}
    </>
}

export default UpdateDate