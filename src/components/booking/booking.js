import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDatePickerVisible: false,
            isTimePickerVisible:false,
            modalIsOpened:false,

            bookingType:'',
            bookingDate:'',
            bookingTime:'',
        };
        this.showModal = this.showModal.bind(this);

        // Date picker
        this._handleDatePicked = this._handleDatePicked.bind(this);
        this._showDatePicker = this._showDatePicker.bind(this);
        this._hideDatePicker = this._hideDatePicker.bind(this);

        // Time picker
        this._handleTimePicked = this._handleTimePicked.bind(this);
        this._showTimePicker = this._showTimePicker.bind(this);
        this._hideTimePicker = this._hideTimePicker.bind(this);
    }
    showModal(){
        this.setState({
            modalIsOpened:!this.state.modalIsOpened,
        })
    }

    // Date picker
    _handleDatePicked(date){
        this.setState({
            bookingDate: date.toString().substr(0,15),
        })
        this._hideDatePicker();
    };

    _showDatePicker(){
        this.setState({
            isDatePickerVisible:true
        })
    }
    _hideDatePicker(){
        this.setState({
            isDatePickerVisible:false
        })
    }

    // Time picker
    _handleTimePicked(time){
        this.setState({
            bookingTime: time.toString().substr(16),
        })
        this._hideTimePicker();
    }
    _showTimePicker(){
        this.setState({
            isTimePickerVisible:true
        })
    }
    _hideTimePicker(){
        this.setState({
            isTimePickerVisible:false
        })
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Type */}
                <TouchableOpacity onPress={this.showModal} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Choose your type
                    </Text>
                </TouchableOpacity>

                <Text style={styles.choosenText}>
                    {this.state.bookingType.length > 0 ? "You have selected "+this.state.bookingType +" type" : null}
                </Text>

                {/* Date */}
                <TouchableOpacity onPress={this._showDatePicker} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Choose your date
                    </Text>
                </TouchableOpacity>
                <DateTimePicker 
                    mode={'date'}
                    isVisible={this.state.isDatePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDatePicker} />
                <Text style={styles.choosenText}>
                    {this.state.bookingDate && this.state.bookingDate.length > 0 ? "You have selected "+this.state.bookingDate : null}
                </Text>

                {/* Time */}
                <TouchableOpacity onPress={this._showTimePicker} style={styles.button}>
                    <Text style={styles.buttonText}>
                        Choose your time
                    </Text>
                </TouchableOpacity>
                <DateTimePicker 
                    mode={'time'}
                    isVisible={this.state.isTimePickerVisible}
                    onConfirm={this._handleTimePicked}
                    onCancel={this._hideTimePicker} />
                <Text style={styles.choosenText}>
                    {this.state.bookingTime && this.state.bookingTime.length > 0 ? "You have selected "+this.state.bookingTime : null}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 20,
        width:250,
        justifyContent: 'center',
        borderRadius: 20,
    },
    buttonText:{
        fontSize: 20,
    },
    choosenText:{
        marginTop: 10,
        marginBottom: 10,
        color: '#d35400',
        fontSize: 15,
        fontWeight: '700',
    }
})