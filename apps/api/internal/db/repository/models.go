// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.26.0

package db

import (
	"database/sql/driver"
	"fmt"

	"github.com/jackc/pgx/v5/pgtype"
)

type RequestStatus string

const (
	RequestStatusPending  RequestStatus = "pending"
	RequestStatusApproved RequestStatus = "approved"
	RequestStatusDenied   RequestStatus = "denied"
	RequestStatusArrived  RequestStatus = "arrived"
)

func (e *RequestStatus) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = RequestStatus(s)
	case string:
		*e = RequestStatus(s)
	default:
		return fmt.Errorf("unsupported scan type for RequestStatus: %T", src)
	}
	return nil
}

type NullRequestStatus struct {
	RequestStatus RequestStatus `json:"RequestStatus"`
	Valid         bool          `json:"valid"` // Valid is true if RequestStatus is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullRequestStatus) Scan(value interface{}) error {
	if value == nil {
		ns.RequestStatus, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.RequestStatus.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullRequestStatus) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.RequestStatus), nil
}

func AllRequestStatusValues() []RequestStatus {
	return []RequestStatus{
		RequestStatusPending,
		RequestStatusApproved,
		RequestStatusDenied,
		RequestStatusArrived,
	}
}

type Role string

const (
	RoleSecretary Role = "secretary"
	RoleTeacher   Role = "teacher"
	RoleStudent   Role = "student"
	RoleAdmin     Role = "admin"
)

func (e *Role) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = Role(s)
	case string:
		*e = Role(s)
	default:
		return fmt.Errorf("unsupported scan type for Role: %T", src)
	}
	return nil
}

type NullRole struct {
	Role  Role `json:"Role"`
	Valid bool `json:"valid"` // Valid is true if Role is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullRole) Scan(value interface{}) error {
	if value == nil {
		ns.Role, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.Role.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullRole) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.Role), nil
}

func AllRoleValues() []Role {
	return []Role{
		RoleSecretary,
		RoleTeacher,
		RoleStudent,
		RoleAdmin,
	}
}

type Status string

const (
	StatusTransferredA Status = "transferredA"
	StatusTransferredN Status = "transferredN"
	StatusDefault      Status = "default"
)

func (e *Status) Scan(src interface{}) error {
	switch s := src.(type) {
	case []byte:
		*e = Status(s)
	case string:
		*e = Status(s)
	default:
		return fmt.Errorf("unsupported scan type for Status: %T", src)
	}
	return nil
}

type NullStatus struct {
	Status Status `json:"Status"`
	Valid  bool   `json:"valid"` // Valid is true if Status is not NULL
}

// Scan implements the Scanner interface.
func (ns *NullStatus) Scan(value interface{}) error {
	if value == nil {
		ns.Status, ns.Valid = "", false
		return nil
	}
	ns.Valid = true
	return ns.Status.Scan(value)
}

// Value implements the driver Valuer interface.
func (ns NullStatus) Value() (driver.Value, error) {
	if !ns.Valid {
		return nil, nil
	}
	return string(ns.Status), nil
}

func AllStatusValues() []Status {
	return []Status{
		StatusTransferredA,
		StatusTransferredN,
		StatusDefault,
	}
}

type Account struct {
	UserId            string      `db:"userId" json:"userId"`
	Type              string      `db:"type" json:"type"`
	Provider          string      `db:"provider" json:"provider"`
	ProviderAccountId string      `db:"providerAccountId" json:"providerAccountId"`
	RefreshToken      pgtype.Text `db:"refresh_token" json:"refresh_token"`
	AccessToken       pgtype.Text `db:"access_token" json:"access_token"`
	ExpiresAt         pgtype.Int4 `db:"expires_at" json:"expires_at"`
	TokenType         pgtype.Text `db:"token_type" json:"token_type"`
	Scope             pgtype.Text `db:"scope" json:"scope"`
	IDToken           pgtype.Text `db:"id_token" json:"id_token"`
	SessionState      pgtype.Text `db:"session_state" json:"session_state"`
}

type Availability struct {
	ID          string      `db:"id" json:"id"`
	ClassroomId string      `db:"classroomId" json:"classroomId"`
	Date        pgtype.Date `db:"date" json:"date"`
	Available   bool        `db:"available" json:"available"`
	TeacherId   pgtype.Text `db:"teacherId" json:"teacherId"`
}

type AvailabilityView struct {
	ID           string         `db:"id" json:"id"`
	RoomNumber   string         `db:"roomNumber" json:"roomNumber"`
	TeacherName  string         `db:"teacherName" json:"teacherName"`
	TeacherId    pgtype.Text    `db:"teacherId" json:"teacherId"`
	Comment      pgtype.Text    `db:"comment" json:"comment"`
	IsFlex       pgtype.Bool    `db:"isFlex" json:"isFlex"`
	Availability []Availability `db:"availability" json:"availability"`
}

type Classroom struct {
	ID          string      `db:"id" json:"id"`
	RoomNumber  string      `db:"roomNumber" json:"roomNumber"`
	TeacherName string      `db:"teacherName" json:"teacherName"`
	TeacherId   pgtype.Text `db:"teacherId" json:"teacherId"`
	Comment     pgtype.Text `db:"comment" json:"comment"`
	IsFlex      pgtype.Bool `db:"isFlex" json:"isFlex"`
}

type Config struct {
	Secretaries       []string         `db:"secretaries" json:"secretaries"`
	PreferredNames    []byte           `db:"preferredNames" json:"preferredNames"`
	ExcludedTeachers  []string         `db:"excludedTeachers" json:"excludedTeachers"`
	SemesterClassName pgtype.Text      `db:"semesterClassName" json:"semesterClassName"`
	IsRedisCluster    pgtype.Bool      `db:"isRedisCluster" json:"isRedisCluster"`
	CreatedAt         pgtype.Timestamp `db:"createdAt" json:"createdAt"`
}

type Log struct {
	ID     string      `db:"id" json:"id"`
	User   pgtype.Text `db:"user" json:"user"`
	Type   string      `db:"type" json:"type"`
	Action string      `db:"action" json:"action"`
}

type Request struct {
	ID                 int32         `db:"id" json:"id"`
	StudentId          string        `db:"studentId" json:"studentId"`
	StudentName        string        `db:"studentName" json:"studentName"`
	NewTeacher         string        `db:"newTeacher" json:"newTeacher"`
	NewTeacherName     string        `db:"newTeacherName" json:"newTeacherName"`
	CurrentTeacher     string        `db:"currentTeacher" json:"currentTeacher"`
	CurrentTeacherName string        `db:"currentTeacherName" json:"currentTeacherName"`
	DateRequested      pgtype.Date   `db:"dateRequested" json:"dateRequested"`
	Status             RequestStatus `db:"status" json:"status"`
	Arrived            pgtype.Bool   `db:"arrived" json:"arrived"`
	Timestamp          string        `db:"timestamp" json:"timestamp"`
}

type Session struct {
	SessionToken string           `db:"sessionToken" json:"sessionToken"`
	UserId       string           `db:"userId" json:"userId"`
	Expires      pgtype.Timestamp `db:"expires" json:"expires"`
}

type Student struct {
	StudentEmail string `db:"studentEmail" json:"studentEmail"`
	StudentName  string `db:"studentName" json:"studentName"`
	ClassroomId  string `db:"classroomId" json:"classroomId"`
	Status       Status `db:"status" json:"status"`
	ID           int32  `db:"id" json:"id"`
}

type User struct {
	ID            string           `db:"id" json:"id"`
	Name          pgtype.Text      `db:"name" json:"name"`
	Email         string           `db:"email" json:"email"`
	EmailVerified pgtype.Timestamp `db:"emailVerified" json:"emailVerified"`
	Image         pgtype.Text      `db:"image" json:"image"`
	Role          string           `db:"role" json:"role"`
}

type VerificationToken struct {
	Identifier string           `db:"identifier" json:"identifier"`
	Token      string           `db:"token" json:"token"`
	Expires    pgtype.Timestamp `db:"expires" json:"expires"`
}
