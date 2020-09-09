import './login-box.css';
import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

function LoginBox() {
    return (
        <Card className="login-panel">
            <CardContent>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default LoginBox;