import PDF from "../Pdf";
import {Button, Card, Form, Input, Spin} from "antd";
import {saveAs} from 'file-saver'
import {useState} from "react";
import {pdf} from '@react-pdf/renderer'


function App() {
    const [form] = Form.useForm();

    const [isLoading, setIsLoading] = useState(false)
    const onFinish = (value) => {
        setIsLoading(true)

        pdf(<PDF data={value.username}/>)
            .toBlob()
            .then(blob => {
                setIsLoading(false)
                form.setFieldValue({username:''})
                saveAs(blob,'sertifikat.pdf')
            });
    }

    return (
        <>
            <Spin spinning={isLoading}>
                <Card>
                    <Form
                        name="basic"
                        labelCol={{
                            span: 24,
                        }}
                        wrapperCol={{
                            span: 24,
                        }}

                        initialValues={{username:''}}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="O'quvchining ism familyasi"

                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                Sertifikat yaratish
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Spin>

            {/*<PDFViewer style={{width: '100%', height: '700px'}}>*/}
            {/*    <PDF/>*/}
            {/*</PDFViewer>*/}
        </>

    );
}

export default App;

