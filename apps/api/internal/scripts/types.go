package scripts

type AzureResponse[T any] struct {
	Context  string `json:"@odata.context"`
	NextLink string `json:"@odata.nextLink"`
	Value    []T    `json:"value"`
}

type AzureUser struct {
	ID                string `json:"id"`
	DisplayName       string `json:"displayName"`
	UserPrincipalName string `json:"userPrincipalName"`
}
type Roster struct {
	StudentEmail       string `json:"studentEmail"`
	StudentName        string `json:"studentName"`
	ClassroomId        string `json:"classroomId"`
	DefaultClassroomId string `json:"defaultClassroomId"`
}

type Metadata struct {
	IcLegacySourceId string `json:"ic.legacySourceId"`
}

type ClassUser struct {
	SourceId         string `json:"sourceId"`
	Status           string `json:"status"`
	DateLastModified string `json:"dateLastModified"`
	Metadata
	UserMasterId string        `json:"userMasterIdentifier"`
	Identifier   string        `json:"identifier"`
	EnabledUser  string        `json:"enabledUser"`
	GivenName    string        `json:"givenName"`
	FamilyName   string        `json:"familyName"`
	Email        string        `json:"email"`
	UserIds      []UserIds     `json:"userIds"`
	Roles        []Roles       `json:"roles"`
	Agents       []interface{} `json:"agents"`
	Grades       []string      `json:"grades"`
}

type Roles struct {
	BeginDate string     `json:"beginDate"`
	RoleType  string     `json:"roleType"`
	Role      string     `json:"role"`
	Org       LinkObject `json:"org"`
}

type RosterResponse struct {
	Users []ClassUser `json:"users"`
}
type ClassInfo struct {
	SourcedId        string       `json:"sourcedId"`
	Status           string       `json:"status"`
	DateLastModified string       `json:"dateLastModified"`
	Title            string       `json:"title"`
	ClassType        string       `json:"classType"`
	ClassCode        string       `json:"classCode"`
	Location         *string      `json:"location,omitempty"`
	Course           LinkObject   `json:"course"`
	School           LinkObject   `json:"school"`
	Terms            []LinkObject `json:"terms"`
	Periods          []string     `json:"periods"`
}

type ClassResponse struct {
	Classes []ClassInfo `json:"classes"`
}
type LinkObject struct {
	Href      string `json:"href"`
	SourcedId string `json:"sourcedId"`
	Type      string `json:"type"`
}

type UserIds struct {
	Identifier string `json:"identifier"`
	Type       string `json:"type"`
}
